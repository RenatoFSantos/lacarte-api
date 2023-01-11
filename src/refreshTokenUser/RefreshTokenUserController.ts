import { Request, Response } from 'express';
import { RefreshTokenUser } from './RefreshTokenUser';

export class RefreshTokenUserController {

  async handle(request: Request, response: Response) {

    const { refresh_token } = await request.body;
    const refreshTokenUser = new RefreshTokenUser();

    const token = await refreshTokenUser.execute(refresh_token);

    return response.json(token);

  }

}