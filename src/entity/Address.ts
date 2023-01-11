import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'Address' })
export class Address extends BaseEntity {

    @Column({ name: 'addr_nm_address', type: "varchar", length: 50, comment: 'Address Name', nullable: true})
    addrNmAddress: string;

    @Column({ name: 'addr_cd_type', type: "char", length: 1, comment: 'Address type: R-Residencial, C-Comercial', default: 'R'})
    addrCdType: string;

    @Column({ name: 'addr_ds_address', type: "varchar", length: 100, comment: 'Address'})
    addrDsAddress: string;

    @Column({ name: 'addr_ds_number', type: "varchar", length: 10, comment: 'Address number', nullable: true})
    addrDsNumber: string;

    @Column({ name: 'addr_ds_complement', type: "varchar", length: 100, comment: 'Address complement', nullable: true})
    addrDsComplement: string;

    @Column({ name: 'addr_nm_district', type: "varchar", length: 100, comment: 'District', nullable: true})
    addrNmDistrict: string;

    @Column({ name: 'addr_nm_city', type: "varchar", length: 50, comment: 'City'})
    addrNmCity: string;

    @Column({ name: 'addr_sg_state', type: "varchar", length: 2, comment: 'State', nullable: true})
    addrSgState: string;

    @Column({ name: 'addr_cd_zipcode', type: "varchar", length: 8, comment: 'Zipcode'})
    addrCdZipcode: string;

}