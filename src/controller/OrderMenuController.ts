import { OrderMenu } from "../entity/OrderMenu";
import { BaseController } from "./BaseController";

export class OrderMenuController extends BaseController<OrderMenu> {

    constructor() {
        super(OrderMenu)
    }
    
}