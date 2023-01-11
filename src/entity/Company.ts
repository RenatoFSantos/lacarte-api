import { Column, Entity, ManyToOne } from "typeorm";
import { Address } from "./Address";
import { BaseEntity } from "./BaseEntity";
import { Segment } from "./Segment";
import { User } from "./User";

@Entity({ name: 'Company' })
export class Company extends BaseEntity {

    @Column({ name: 'comp_nm_company', type: 'varchar', length: 100, comment: 'Company name', default: ''})
    compNmCompany: string;

    @Column({ name: 'comp_nm_trademark', type: 'varchar', length: 100, comment: 'Trade name', nullable: true })
    compNmTrademark: string;

    @Column({ name: 'comp_ds_company', type: 'varchar', length: 500, comment: 'Description', nullable: true })
    compDsCompany: string;

    @Column({ name: 'comp_cd_cnpj', type: 'varchar', length: 20, comment: 'CNPJ', default: '' })
    compCdCNPJ: string;

    @Column({ name: 'comp_ds_phone', type: 'varchar', length: 20, comment: 'Phone', nullable: true })
    compDsPhone: string;

    @Column({ name: 'comp_ds_smartphone', type: 'varchar', length: 20, comment: 'Smartphone', nullable: true })
    compDsSmartphone: string;

    @Column({ name: 'comp_ds_whatsapp', type: 'varchar', length: 20, comment: 'Whatsapp', nullable: true })
    compDsWhatsapp: string;

    @Column({ name: 'comp_ds_email', type: 'varchar', length: 80, comment: 'Email', default: '' })
    compDsEmail: string;

    @Column({ name: 'comp_ds_site', type: 'varchar', length: 80, comment: 'Whatsapp', nullable: true })
    compDsSite: string;

    @Column({ name: 'comp_cd_pix', type: 'varchar', length: 20, comment: 'PIX', nullable: true })
    compCdPix: string;

    @Column({ name: 'comp_tx_image', type: 'varchar', length: 500, comment: 'Image default', nullable: true })
    compTxImage: string;

    @Column({ name: 'comp_in_delivery', default: false, comment: 'Delivery 0 = False/ 1 = true' })
    compInDelivery: boolean;

    @Column({ name: 'comp_cd_delivery', default: 'P', type: 'char', length: 1, comment: 'Delivery type = V-Fixed value / P-Percent' })
    compCdDelivery: string;

    @Column({ name: 'comp_vl_delivery', type: 'decimal', precision: 10, scale: 2, comment: 'Delivery value', nullable: true })
    compVlDelivery: number;

    @Column({ name: 'comp_ds_tags', type: 'varchar', length: 200, comment: 'Tags', nullable: true })
    compDsTags: string;

    @Column({ name: 'comp_vl_rating', type: 'decimal', precision: 10, scale: 2, comment: 'Rating', nullable: true })
    compVlRating: number;

    @Column({ name: 'comp_ds_logo', type: 'varchar', length: 500, comment: 'Logo', nullable: true })
    compDsLogo: string;

    @ManyToOne(() => Segment, { eager: true })
    segment: Segment;

    @ManyToOne(() => Address, { eager: true })
    address: Address;

    @ManyToOne(() => User, { eager: true })
    user: User;
}