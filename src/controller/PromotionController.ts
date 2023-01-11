import { Promotion } from "../entity/Promotion";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import { FileHelper } from "../helpers/fileHelper";
import { Equal, LessThanOrEqual, MoreThanOrEqual } from "typeorm";

export class PromotionController extends BaseController<Promotion> {

    constructor() {
        super(Promotion, false)
    }
    
    private validationResource(request: Request) {
        let _model = <Promotion>request.body;
        // -- Data validation
        super.isRequired(_model.promNmPromotion, 'Nome da promoção é obrigatória!');
        super.isRequired(_model.promCdQrcode, 'Qrcode é obrigatório!');
        super.isRequired(_model.company, 'Estabelecimento é obrigatório!');
        super.isRequired(_model.promDtStart, 'Data de início é obrigatória!');
    }
    
    async save(request: Request) {
        let _model = <Promotion>request.body;

        // --- Data validation
        this.validationResource(request);

        // --- Image Processing
        if (_model.promCdQrcode && _model.promCdQrcode !== '---') {
            let pictureCreatedResult = await FileHelper.writePicture(_model.promCdQrcode);
            if (pictureCreatedResult) {
            _model.promCdQrcode = pictureCreatedResult;
            }
        }

        // -- Save Data
        return super.save(_model, request, false);
    }

    async getPromotionByCompany(request: Request) {
        let id = request.params.id ? request.params.id : null;
        let dayDate = request.params.daydate ? request.params.daydate : null;
        let resourceList: Array<Promotion> = new Array<Promotion>();
        if (id) {
            resourceList = await this.repository.find({
                relations: [
                    "company"
                ],
                where: {
                    company: Equal(`${id}`),
                    // promDtStart: LessThanOrEqual(dayDate),
                    // promDtFinish: MoreThanOrEqual(dayDate),
                    deleted: false,
                    active: true
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

}