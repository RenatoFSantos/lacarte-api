import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getRepository, Repository } from "typeorm";
import { User } from "../entity/User";
import config from "./../configuration/config";

export default async (req: Request, res: Response, next: Function) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-token-access"] ||
    req.headers.authorization;

  let publicRoutes = <Array<string>>config.publicRoutes;
  let isPublicRoute: boolean = false;
  let _userRepository: Repository<User> = getRepository(User);

  publicRoutes.forEach((url) => {
    let isPublic = req.url.includes(url) || req.url.indexOf("storage") > -1;
    if (isPublic) {
      isPublicRoute = true;
    }
  });

  if (isPublicRoute) {
    // if the route is public, go ahead
    next();
  } else {
    if (token) {
      try {
        let _tokenAccess = "";
        if (token.indexOf("Bearer") >= 0) {
          [, _tokenAccess] = token.split(" ");
        } else {
          _tokenAccess = token;
        }

        let _userAuth = verify(_tokenAccess, config.secretKey);
        req.params.userAuth = _userAuth;

        // Check if user is Administrator
        let _userDB = await _userRepository.findOne({
          where: {
            uid: _userAuth.uid,
            deleted: false,
            active: true,
          },
        });
        // Insert the user type in the request
        req.params.userCdType = _userDB.userCdType;

        next();
      } catch (error) {
        res
          .status(401)
          .send({ message: `Token informado é inválido! (${token})` });
      }
    } else {
      res.status(401).send({
        message: "Para acessar este recurso você precisa estar autenticado.",
      });
      return;
    }
  }
};
