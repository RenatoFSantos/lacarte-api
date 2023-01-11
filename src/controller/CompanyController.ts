import { Company } from "../entity/Company";
import { BaseController } from "./BaseController";
import { Request } from "express";
import { FileHelper } from "../helpers/fileHelper";

export class CompanyController extends BaseController<Company> {

    constructor() {
        super(Company);
    }

    private validationResource(request: Request) {
        let _model = <Company>request.body;
        // -- Data validation
        super.isRequired(_model.compNmCompany, 'Razão Social é obrigatória!');
        super.isRequired(_model.compCdCNPJ, 'CNPJ é obrigatório!');
        super.isRequired(_model.compDsEmail, 'Email é obrigatório!');
        super.isRequired(_model.segment, 'Segmento é obrigatório!');
        super.isRequired(_model.address, 'Endereço é obrigatório!');
        super.isRequired(_model.user, 'Usuário responsável é obrigatório!');
      }
    
      async save(request: Request) {
        let _model = <Company>request.body;

        // -- Data validation
        this.validationResource(request);
    
        // --- Logo Image Processing
        if (_model.compDsLogo && _model.compDsLogo !== '---') {
          let pictureCreatedResult = await FileHelper.writePicture(_model.compDsLogo);
          if (pictureCreatedResult) {
            _model.compDsLogo = pictureCreatedResult;
          }
        }
    
        // --- Presentation Image Processing
        if (_model.compTxImage && _model.compTxImage !== '---') {
          let pictureCreatedResult = await FileHelper.writePicture(_model.compTxImage);
          if (pictureCreatedResult) {
            _model.compTxImage = pictureCreatedResult;
          }
        }
    
        // -- Save Data
        return super.save(_model, request, false);
      }
    

}