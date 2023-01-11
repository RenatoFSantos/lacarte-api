import { Product } from "../entity/Product";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import { FileHelper } from "../helpers/fileHelper";
import { Like } from "typeorm";

export class ProductController extends BaseController<Product> {

    constructor() {
        super(Product)
    }
    
    private validationResource(request: Request) {
      let _model = <Product>request.body;
      // -- Data validation
      super.isRequired(_model.prodNmProduct, 'Nome do produto é obrigatório');
    }
    
    async save(request: Request) {
      let _model = <Product>request.body;

      // -- Data validation
      this.validationResource(request);
  
      // --- Product Image Processing
      if (_model.prodTxImage && _model.prodTxImage !== '---') {
        let pictureCreatedResult = await FileHelper.writePicture(_model.prodTxImage);
        if (pictureCreatedResult) {
          _model.prodTxImage = pictureCreatedResult;
        }
      }
  
      // -- Save Data
      return super.save(_model, request, false);
    }
    
    async getProductByName(request: Request) {
      let search = request.params.search ? request.params.search : null;
      let listProducts: Array<Product> = new Array<Product>();
      if (search!=='vazio') {
        listProducts = await this.repository.find({
            select: [
                "uid",
                "prodNmProduct",
                "prodDsProduct",
                "prodTxImage",
                "category"
            ],
            relations: [
                "category"
            ],
            where: {
                prodNmProduct: Like(`%${search}%`),
                deleted: false
            }
        })
      } else {
        listProducts = await this.repository.find({
          select: [
            "uid",
            "prodNmProduct",
            "prodDsProduct",
            "prodTxImage",
            "category"
          ],
          where: {
            deleted: false
          }
        });
      }
      
      if (listProducts.length > 0) {
          return {
          status: 200,
          message: {
              listProducts
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