import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Company } from "./Company";
import { UserAddress } from "./UserAddress";

@Entity({ name: 'Order' })
export class Order extends BaseEntity {

    @Column({ name: 'orde_qn_total', type: 'decimal', precision: 10, scale: 2, comment: 'Total amount', default: 0})
    orderQnTotal: number;

    @Column({ name: 'orde_vl_discount', type: 'decimal', precision: 10, scale: 2, comment: 'Total discount amount', default: 0})
    orderVlDiscount: number;

    @Column({ name: 'orde_vl_delivery', type: 'decimal', precision: 10, scale: 2, comment: 'Total delivery value', default: 0})
    orderVlDelivery: number;

    @Column({ name: 'orde_vl_total', type: 'decimal', precision: 10, scale: 2, comment: 'Total order value', default: 0})
    orderVlTotal: number;

    @Column({ name: 'orde_in_payment', type: 'varchar', length: 3, comment: 'Payment methods: CRE-Credcard, DEB-Debit, CSH-Cash, PIX, VCH-Voucher', default: 'CSH'})
    orderInPayment: string;

    @ManyToOne(() => UserAddress, { eager: true })
    userAddress: UserAddress;

    @ManyToOne(() => Company, { eager: true })
    company: Company;

}