import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Company } from "./Company";
import { Product } from "./Product";

@Entity({ name: 'Menu' })
export class Menu extends BaseEntity {

    @Column({ name: 'menu_cd_menu', type: 'varchar', length: 15, comment: 'Code on menu'})
    menuCdMenu: string;
    
    @Column({ name: 'menu_vl_price', type: 'decimal', precision: 10, scale: 2, comment: 'Price', default: 0})
    menuVlPrice: number;

    @Column({ name: 'menu_pr_discount', type: 'decimal', precision: 5, scale: 2, comment: 'Discount tax', default: 0})
    menuPrDiscount: number;

    @Column({ name: 'menu_pr_delivery', type: 'decimal', precision: 5, scale: 2, comment: 'Delivery tax', default: 0})
    menuPrDelivery: number;

    @Column({ name: 'menu_tx_image', type: 'varchar', length: 50, comment: 'Product image', nullable: true})
    menuTxImage: string;

    @Column({ name: 'menu_pr_cashback', type: 'decimal', precision: 5, scale: 2, comment: 'Cashback tax', default: 0})
    menuPrCashback: number;

    @Column({ name: 'menu_ds_descriptor', type: 'varchar', length: 50, comment: 'List of descritores to facilitasse the search for products (start descriptors with #)', nullable: true})
    menuDsDescriptor: string;

    @Column({ name: 'menu_vl_rating', type: 'decimal', precision: 5, scale: 2, comment: 'Rating of menu option', default: 0})
    menuVlRating: number;

    @ManyToOne(() => Company, { eager: true })
    company: Company;

    @ManyToOne(() => Product, { eager: true })
    product: Product;

}