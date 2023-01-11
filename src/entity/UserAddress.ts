import { Column, Entity, ManyToOne } from "typeorm";
import { Address } from "./Address";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

@Entity({ name: 'UserAddress' })
export class UserAddress extends BaseEntity {

    @Column({ name: 'usad_in_default', comment: 'Default Address (0-Falte, 1=True)', default: true})
    usadInDefault: boolean;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Address, { eager: true })
    address: Address;
}