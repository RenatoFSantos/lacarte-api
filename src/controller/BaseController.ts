import {getRepository, Repository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { BaseNotification } from "../entity/BaseNotification";

export abstract class BaseController<T> extends BaseNotification  {
    private _repository: Repository<T>;
    private _onlyAdminController: boolean = false;
    public errorRoot: any = {
      status: 401,
      errors: ['Você não está autorizado a executar essa funcionalidade!']
    }
  
    constructor(entity: any, onlyAdmin: boolean = false) {
      super();
      this._repository = getRepository<T>(entity);
      this._onlyAdminController = onlyAdmin;
    }
  
    public checkNoPermission(request: Request) {
      return (this._onlyAdminController && request.userCdType != 'A')
      // return false;
    }
  
    async all(request: Request) {
      // Check if user has administrator rights
      if (this.checkNoPermission(request)) return this.errorRoot;
      // does not load the deleted records
      return this._repository.find({
        where: {
          deleted: false
        }
      });
    }
  
    async one(request: Request) {
      // Check if user has administrator rights
      
      if (this.checkNoPermission(request)) return this.errorRoot;
  
      const uid = request.params.id as string;
      return this._repository.findOne(uid);
    }
  
    async save(model: any, request: Request, isIgnore?: boolean) {
      // Check if user has administrator rights
      if (!isIgnore)
        if (this.checkNoPermission(request)) return this.errorRoot;

      if (model.uid) {
        // remove automatic control fields
        delete model['createAt'];
        delete model['updateAt'];
        delete model['deleted'];
  
        const uid = model.uid as string;
        let _modelInDB = await this._repository.findOne(uid);
    
        if (_modelInDB) {
          Object.assign(_modelInDB, model);
        }
      }
  
      if (this.valid) {
        return this._repository.save(model);
      } else {
        return {
          status: 400,
          errors: this.allNotifications
        }
      }
    }
  
    async remove(request: Request) {
      // Check if user has administrator rights
      if (this.checkNoPermission(request)) return this.errorRoot;
      const uid = request.params.id as string;
      let model: any = await this._repository.findOne(uid);
      if (model) {
        model.deleted = true;
        return await this._repository.save(model);
      } else {
        return {
          status: 404,
          errors: [
            'Item não encontrado na base de dados!'
          ]
        }
      }
    }
  
    get repository(): Repository<T> {
      return this._repository
    }
  
}