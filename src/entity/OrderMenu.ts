import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Menu } from "./Menu";
import { Order } from "./Order";

@Entity({ name: 'OrderMenu' })
export class OrderMenu extends BaseEntity {

    @Column({ name: 'orme_qn_item', type: 'smallint', comment: 'Itens amount', default: 1})
    ormeQnItem: number;

    @Column({ name: 'orme_vl_item', type: 'decimal', precision: 10, scale: 2, comment: 'Unit value without discount', default: 0})
    ormeVlItem: number;

    @Column({ name: 'orme_vl_discount', type: 'decimal', precision: 10, scale: 2, comment: 'Value of discount', default: 0})
    ormeVlDiscount: number;

    @Column({ name: 'orme_vl_total', type: 'decimal', precision: 10, scale: 2, comment: 'Total item value', default: 0})
    ormeVlTotal: number;

    @Column({ name: 'orme_vl_rating', type: 'decimal', precision: 10, scale: 2, comment: 'Item rating', default: 0})
    ormeVlRating: number;

    @ManyToOne(() => Order, { eager: true })
    order: Order;

    @ManyToOne(() => Menu, { eager: true })
    menu: Menu;

}