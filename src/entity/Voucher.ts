import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'Voucher' })
export class Voucher extends BaseEntity {

    @Column({ name: 'vouc_cd_code', type: 'varchar', length: 6, comment: 'Voucher code'})
    voucCdCode: string;
    
    @Column({ name: 'vouc_vl_expiresin', type: 'int', comment: 'Time of expiration' })
    voucVlExpiresin: number;

}