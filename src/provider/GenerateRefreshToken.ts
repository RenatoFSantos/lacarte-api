import { getRepository } from 'typeorm';
import { RefreshToken } from './../entity/RefreshToken';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { User } from '../entity/User';

export class GenerateRefreshToken {

  private _repository: Repository<RefreshToken>;

  async execute(user: User) {
    // set the refreshtoken expiration time.
    const _expiresIn = dayjs().add(30, "second").unix();

    this._repository = getRepository("RefreshToken");

    const generateRefreshToken = await this._repository.save({
      userId: user.uid,
      user: user,
      expiresIn: _expiresIn,
    });

    // --- REFRESH TOKEN OLD
    // const generateRefreshToken = await this._repository.save({
    //   userId: user.uid,
    //   user: user,
    //   expiresIn: _expiresIn,
    // });
    return generateRefreshToken;
  }

}