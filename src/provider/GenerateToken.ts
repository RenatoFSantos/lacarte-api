import { sign } from 'jsonwebtoken';
import config from '../configuration/config';
import { User } from '../entity/User';


export class GenerateToken {

  async execute(user: User) {
    let _payload = {
      uid: user.uid,
      userNmName: user.userNmName,
      userNmLastName: user.userNmLastname,
      userDtBirthdate: user.userDtBirthdate,
      userSgUser: user.userSgUser,
      userDsEmail: user.userDsEmail,
      userCdType: user.userCdType,
      userTxAvatar: user.userTxAvatar
    }

    const token = {
      status: 200,
      message: {
        user: _payload,
        token: sign({
          ..._payload,
          tm: new Date().getTime()
        }, config.secretKey, { expiresIn: "30s" })
      }
    }

    return token;
  }
}