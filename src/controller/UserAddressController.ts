import { UserAddress } from "../entity/UserAddress";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import { Equal } from "typeorm";

export class UserAddressController extends BaseController<UserAddress> {

    constructor() {
        super(UserAddress, false)
    }

    private validationResource(request: Request) {
        let _model = <UserAddress>request.body;
        // -- Validação de dados
        super.isRequired(_model.user, 'Usuário é obrigatório!');
        super.isRequired(_model.address, 'Endereço é obrigatório!');
    }
    
    async save(request: Request): Promise<void> {
        let _model = <UserAddress>request.body;
        // -- Validando dados
        this.validationResource(request);
        // -- Gravando os dados
        try {
            return await super.save(_model, request, false);
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async getAddressByUser(request: Request) {
        let id = request.params.id ? request.params.id : null;
        let address: Array<UserAddress> = new Array<UserAddress>();
        if (id) {
            address = await this.repository.find({
                select: [
                    "uid",
                    "usadInDefault"
                ],
                relations: [
                    "address"
                ],
                where: {
                    user: Equal(`${id}`),
                    deleted: false
                }
            })
        }
        
        if (address.length > 0) {
            return {
            status: 200,
            message: {
                address
            }
            }
        } else {
            return {
            status: 404,
            message: 'Não existem registros.'
            }
        }
    }

}