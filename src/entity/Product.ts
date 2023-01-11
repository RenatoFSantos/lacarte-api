import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

@Entity({ name: 'Product' })
export class Product extends BaseEntity {

    @Column({name: 'prod_cd_standard', type: 'varchar', length: 15, comment: 'Standard product code', nullable: true})
    prodCdStandard: string;

    @Column({ name: 'prod_nm_product', type: 'varchar', length: 50, comment: 'Product name', default: ''})
    prodNmProduct: string;

    @Column({ name: 'prod_ds_product', type: 'varchar', length: 500, comment: 'Product description', nullable: true})
    prodDsProduct: string;
    
    @Column({ name: 'prod_ds_recipe', type: 'varchar', length: 500, comment: 'Recipe', nullable: true})
    prodDsRecipe: string;
    
    @Column({ name: 'prod_tx_image', type: 'varchar', length: 100, comment: 'Standard product image', nullable: true})
    prodTxImage: string;
    
    @Column({ name: 'prod_ds_descriptor', type: 'varchar', length: 200, comment: 'List of descritores to facilitasse the search for products (start descriptors with #)', nullable: true})
    prodDsDescriptor: string;
    
    @ManyToOne(() => Category, {eager: true})
    category: Category;

}