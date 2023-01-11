import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Promotion } from "./Promotion";
import { User } from "./User";

@Entity({ name: 'Fidelity' })
export class Fidelity extends BaseEntity {
    @Column({ name: 'fide_in_validate', comment: 'Valid: 0 - False, 1 - True', default: true})
    fideInValidate: boolean;
    
    @Column({ name: 'fide_qn_voucher', comment: 'Number of vouchers', default: 0})
    fideQnVoucher: number;
    
    @ManyToOne(() => Promotion, { eager: true })
    promotion: Promotion;

    @ManyToOne(() => User, { eager: true })
    user: User;
}