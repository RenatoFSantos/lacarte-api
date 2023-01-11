import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Ingredient } from "./Ingredient";
import { Product } from "./Product";

@Entity({ name: 'ProductIngredient' })
export class ProductIngredient extends BaseEntity {

    @Column({ name: 'prin_qn_recipe', type: 'decimal', precision: 10, scale: 2, comment: 'Amount used in recipe', default: 0})
    prinQnRecipe: number;

    @Column({ name: 'prin_vl_ingredient', type: 'decimal', precision: 10, scale: 2, comment: 'Ingredient cost', default: 0})
    prinVlIngredient: number;

    @Column({ name: 'prin_ds_recipe', type: 'varchar', length: 250, comment: 'Recipe', nullable: true})
    prinDsRecipe: string;

    @ManyToOne(() => Product, { eager: true })
    product: Product;

    @ManyToOne(() => Ingredient, { eager: true })
    ingredient: Ingredient;
}
