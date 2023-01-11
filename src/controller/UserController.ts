
import {Request} from "express";
import {User} from "../entity/User";
import { BaseController } from "./BaseController";
import * as md5 from 'md5';
import { FileHelper } from "../helpers/fileHelper";
import { GenerateToken } from "../provider/GenerateToken";
import { Equal, getConnection } from "typeorm";
import { RefreshToken } from "../entity/RefreshToken";
import { GenerateRefreshToken } from "../provider/GenerateRefreshToken";
import configMail from "../configuration/configMail";
const nodemailer = require('nodemailer');


export class UserController extends BaseController<User> {
      
    constructor() {
        super(User);
    }

    async auth(request: Request) {
        let { userDsEmail, userCdPassword } = request.body;
        if (!userDsEmail || !userCdPassword) {
            return { status: 400, message: 'Informe o email e a senha para efetuar o login' };
        }
        // let user = await this.repository.findOne({
        //     userDsEmail: userDsEmail, userCdPassword: md5(userCdPassword)
        // });
        let user = await this.repository.findOne({
            where: [
                { userDsEmail: userDsEmail, userCdPassword: md5(userCdPassword) },
                { userDsEmail: userDsEmail, userCdRecovery: userCdPassword },
            ]
        })
        console.log('Usuário login=', user);
        if (user) {
            // generate token
            const generateToken = new GenerateToken();
            const token = await generateToken.execute(user);

            // Delete user refreshtoken
            await getConnection()
                .createQueryBuilder()
                .delete()
                .from(RefreshToken)
                .where("userId = :id", { id: user.uid })
                .execute();

            // generate refreshToken
            const generateRefreshToken = new GenerateRefreshToken();
            const refreshToken = await generateRefreshToken.execute(user);
            return { token, refreshToken }

        } else {
            return { status: 404, message: 'Email ou senha inválida!' }
        }
    }

    async createUser(request: Request) {
   
        let { userSgUser, userNmName, userNmLastname, userDtBirthdate, userDsEmail, userDsPhone, userDsSmartphone, 
            userDsWhatsapp, userCdPassword, userCdConfirmPassword, userCdType, userTxAvatar } = request.body;
        super.isRequired(userSgUser, 'A sigla do usuário é obrigatória!');
        super.isRequired(userNmName, 'O nome do usuário é obrigatório!');
        super.isEmail(userDsEmail, 'O email é obrigatório e deve ser válido!');
        super.isRequired(userCdPassword, 'A senha é obrigatória!');
        super.isRequired(userCdConfirmPassword, 'A confirmação da senha é obrigatória!');
        super.isValidPassword(userCdPassword, userCdConfirmPassword, 'As senhas não conferem. Favor verificar!');
        let _user = new User();
        _user.userSgUser = userSgUser;
        _user.userNmName = userNmName;
        _user.userNmLastname = userNmLastname;
        _user.userDtBirthdate = userDtBirthdate;
        _user.userDsEmail = userDsEmail;
        _user.userDsPhone = userDsPhone;
        _user.userDsSmartphone= userDsSmartphone;
        _user.userDsWhatsapp= userDsWhatsapp;
        _user.userCdPassword= userCdPassword;
        _user.userCdType= userCdType;
        _user.userTxAvatar= userTxAvatar;

        if (_user.userTxAvatar) {
            let pictureCreatedResult = await FileHelper.writePicture(_user.userTxAvatar);
            if (pictureCreatedResult)
                _user.userTxAvatar = pictureCreatedResult;
        }

        if (userCdPassword) {
            _user.userCdPassword = md5(userCdPassword);
            _user.userCdRecovery = _user.userCdPassword.substring(0,5);
        }

        return super.save(_user, request);
    }

    async save(request: Request) {
        let _user = <User>request.body;
        super.isRequired(_user.userSgUser, 'A sigla do usuário é obrigatória!');
        super.isRequired(_user.userNmName, 'O nome do usuário é obrigatório!');
        super.isEmail(_user.userDsEmail, 'O email é obrigatório e deve ser válido!');
        super.isRequired(_user.userCdPassword, 'A senha é obrigatória!');

        if (_user.userTxAvatar) {
            let pictureCreatedResult = await FileHelper.writePicture(_user.userTxAvatar);
            if (pictureCreatedResult)
                _user.userTxAvatar = pictureCreatedResult;
        }

        if (_user.userCdPassword) {
            _user.userCdPassword = md5(_user.userCdPassword);
            _user.userCdRecovery = _user.userCdPassword.substring(0,5);
        }

        return super.save(_user, request);
    }

    async getUserByEmail(request: Request) {
        let idEmail = request.params.email ? request.params.email.trim() : null;
        console.log('valor do email=', idEmail);
        let resource: User = new User();
        if(idEmail) {
            resource = await this.repository.findOne({
                where: {
                    userDsEmail: Equal(`${idEmail}`),
                    active: true,
                    deleted: false
                },
            })
            return resource;
        }
    }  

    async sendEmail(request: Request) {
        let _user = <User>request.body

        let transporter = await nodemailer.createTransport({
            host: configMail.host,
            port: configMail.port,
            secure: configMail.secure,
            auth: {
                user: configMail.auth.user,
                pass: configMail.auth.pass
            }
        })
        
        let mailOptions = {
            from: 'planejamento@bicas.mg.gov.br',
            to: _user.userDsEmail,
            subject: 'LACARTE - Recuperação de Senha',
            text: '',
            html: `
            <p>Olá! Segue sua senha de acesso: <strong>${_user.userCdRecovery}</strong></p>
            <p>Assim que acessar o sistema, por favor, altere a senha para sua segurança!</p>
            <p>Obrigado por utilizar o <strong>LACARTE</strong></p>
            `
        };

        let info = await transporter.sendMail(mailOptions);
        return info;
    }


}