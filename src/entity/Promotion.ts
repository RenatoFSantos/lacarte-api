
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Company } from './Company';

@Entity({ name: 'Promotion'})
export class Promotion extends BaseEntity {
    @Column({name: 'prom_nm_promotion', type: 'varchar', length: 100, comment: 'promotion name', default: ''})
    promNmPromotion: string;

    @Column({name: 'prom_ds_promotion', type: 'varchar', length: 500, comment: 'promotion description', nullable: true})
    promDsPromotion: string;

    @Column({name: 'prom_cd_qrcode', type: 'varchar', length: 500, comment: 'qrcode image', default: ''})
    promCdQrcode: string;

    @Column({name: 'prom_dt_start', type: "timestamp", precision: 6, comment: 'Start date'})
    promDtStart: Date;    

    @Column({name: 'prom_dt_finish', type: "timestamp", precision: 6, comment: 'Finish date'})
    promDtFinish: Date;

    @Column({name: 'prom_cd_status', type: "char", length: 1, comment: 'Status: A-Active, C-Closed, P-Pending, ', default: 'P'})
    promCdStatus: string;

    @ManyToOne(() => Company, { eager: true })
    company: Company;
}