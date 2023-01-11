import { GenerateRefreshToken } from '../provider/GenerateRefreshToken';
import { getRepository, getConnection, Repository } from 'typeorm';
import { GenerateToken } from '../provider/GenerateToken';
import { RefreshToken } from '../entity/RefreshToken';
import * as dayjs from 'dayjs';

export class RefreshTokenUser {

  private _repository: Repository<RefreshToken>;

  async execute(refresh_token: string) {

    let token = {};
    let refreshToken: RefreshToken = new RefreshToken();

    this._repository = getRepository("RefreshToken");
    try {
      const listRefresh: RefreshToken[] = await this._repository.find({
        where: {
          uid: refresh_token
        }
      })
      if (listRefresh.length >= 0) {

        // Generate token
        const generateToken = new GenerateToken();
        token = await generateToken.execute(listRefresh[0].user);

        // Verify if refreshtoken has expired.
        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(listRefresh[0].expiresIn));
        if (refreshTokenExpired) {
          // Delete user refreshtoken
          await getConnection()
            .createQueryBuilder()
            .delete()
            .from(RefreshToken)
            .where("userId = :id", { id: listRefresh[0].userId })
            .execute();

          const generateRefreshToken = new GenerateRefreshToken();
          const newRefreshToken = await generateRefreshToken.execute(listRefresh[0].user);
          return { token, refreshToken: newRefreshToken }
        }
      } else {
        return {
          status: 404,
          errors: [
            'Refresh token inválido!'
          ]
        }
      };
    } catch (error) {
      return {
        status: 400,
        errors: [
          'Problemas na geração do token ' + error
        ]
      }

    }
    return { token, refreshToken };
  }
}