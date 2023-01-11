import { Order } from "../entity/Order";
import { BaseController } from "./BaseController";

export class OrderController extends BaseController<Order> {

    constructor() {
        super(Order)
    }
}