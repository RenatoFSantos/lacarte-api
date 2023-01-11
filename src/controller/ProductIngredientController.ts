import { ProductIngredient } from "../entity/ProductIngredient";
import { BaseController } from "./BaseController";

export class ProductIngredientController extends BaseController<ProductIngredient> {

    constructor() {
        super(ProductIngredient)
    }
}