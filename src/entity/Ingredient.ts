import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'Ingredient' })
export class Ingredient extends BaseEntity {

    @Column({ name: 'ingr_cd_ingredient', type: 'varchar', length: 45, comment: 'Ingredient code'})
    ingrCdIngredient: string;

    @Column({ name: 'ingr_nm_ingredient', type: 'varchar', length: 45, comment: 'Name'})
    ingrNmIngredient: string;

    @Column({ name: 'ingr_ds_ingredient', type: 'varchar', length: 45, comment: 'Description', nullable: true})
    ingrDsIngredient: string;

    @Column({ name: 'ingr_sg_unit', type: 'varchar', length: 5, comment: 'Ingredient unit'})
    ingr_sg_unit: string;

    @Column({ name: 'ingr_qn_unit', type: 'decimal', precision: 10, scale: 2, comment: 'Value of the weight or basic unit of movement of the input in the stock.', default: 0})
    ingrQnUnit: number;

    @Column({ name: 'ingr_vl_average', type: 'decimal', precision: 2, scale: 2, comment: 'Average ingredient price', default: 0})
    ingrVlAverage: number;

}