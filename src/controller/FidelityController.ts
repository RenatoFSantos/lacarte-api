import { Fidelity } from "../entity/Fidelity";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import { Equal } from "typeorm";

export class FidelityController extends BaseController<Fidelity> {

    constructor() {
        super(Fidelity);
    }

    private validationResource(request: Request) {
      let _model = <Fidelity>request.body;
      // -- Data validation
      super.isRequired(_model.fideQnVoucher, 'Quantidade de vouchers é obrigatória');
    }
    
    async save(request: Request) {
      let _model = <Fidelity>request.body;

      // -- Data validation
    //   this.validationResource(request);
  
      // -- Save Data
      return super.save(_model, request, false);
    }
 
    async getFidelityByPromotion(request: Request) {
      let id = request.params.id ? request.params.id : null;
      let resourceList: Array<Fidelity> = new Array<Fidelity>();
      if (id) {
          resourceList = await this.repository.find({
              relations: [
                  "user",
                  "promotion"
              ],
              where: {
                  promotion: Equal(`${id}`),
                  deleted: false
              }
          })
      }
      if (resourceList.length > 0) {
          return {
          status: 200,
          message: {
              resourceList
          }
          }
      } else {
          return {
          status: 404,
          message: 'Não existem registros.'
          }
      }
    }

    async getFidelityByUser(request: Request) {
        let idUser = request.params.id ? request.params.id.trim() : null;
        let resources: Array<Fidelity> = new Array<Fidelity>();
        if(idUser) {
            resources = await this.repository.find({
                relations: [
                    "user",
                    "promotion"
                ],
                where: {
                    user: Equal(`${idUser}`),
                    active: true,
                    deleted: false,
                    fideInValidate: true
                },
            })
            return resources;
        }
    }  

    async getFidelityByUserPromotion(request: Request) {
        let idUser = request.params.iduser ? request.params.iduser.trim() : null;
        let idPromotion = request.params.idpromotion ? request.params.idpromotion.trim() : null;
        let resource: Fidelity = new Fidelity();
        if(idUser && idPromotion) {
            resource = await this.repository.findOne({
                relations: [
                    "user",
                    "promotion"
                ],
                where: {
                    user: Equal(`${idUser}`),
                    promotion: Equal(`${idPromotion}`),
                    active: true,
                    deleted: false
                },
            })
            return resource;
        }
    }  
}