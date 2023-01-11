import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({name: 'Category'})
export class Category extends BaseEntity {

    @Column({name: 'cate_nm_category', type: 'varchar', length:50, comment: 'Category name'})
    cateNmCategory: string;

    @Column({ name: 'cate_tx_image', type: 'varchar', length: 500, comment: 'Category image', nullable: true })
    cateTxImage: string;

}