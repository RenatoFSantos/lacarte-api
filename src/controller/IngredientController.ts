import { Ingredient } from "../entity/Ingredient";
import { BaseController } from "./BaseController";

export class IngredientController extends BaseController<Ingredient> {
    constructor() {
        super(Ingredient);
    }
}