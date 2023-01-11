import { Category } from "../entity/Category";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import { FileHelper } from "../helpers/fileHelper";

export class CategoryController extends BaseController<Category> {

    constructor() {
        super(Category)
    }

    async save(request: Request) {
        let _category = <Category>request.body;
        super.isRequired(_category.cateNmCategory, 'O nome da categoria é obrigatório!');

        if (_category.cateTxImage) {
            let pictureCreatedResult = await FileHelper.writePicture(_category.cateTxImage);
            if (pictureCreatedResult)
                _category.cateTxImage = pictureCreatedResult;
        }

        return super.save(_category, request);
    }
}