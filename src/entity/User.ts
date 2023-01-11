import {Entity, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { RefreshToken } from "./RefreshToken";

@Entity({ name: 'User' })
export class User extends BaseEntity {

    @Column({ name: 'user_sg_user', type: 'varchar', length: 20, comment: 'Codname' })
    userSgUser: string;

    @Column({ name: 'user_nm_name', type: 'varchar', length: 25, comment: 'Name' })
    userNmName: string;

    @Column({ name: 'user_nm_lastname', type: 'varchar', length: 50, comment: 'Lastname', nullable: true })
    userNmLastname: string;

    @Column({ name: 'user_dt_birthdate', type: 'datetime', comment: 'Birth Date', nullable: true })
    userDtBirthdate: Date;

    @Column({ name: 'user_ds_email', type: 'varchar', length: 100, comment: 'Email' })
    userDsEmail: string;

    @Column({ name: 'user_ds_phone', type: 'varchar', length: 20, comment: 'Phone', nullable: true })
    userDsPhone: string;

    @Column({ name: 'user_ds_smartphone', type: 'varchar', length: 20, comment: 'Smartphone', nullable: true })
    userDsSmartphone: string;

    @Column({ name: 'user_ds_whatsapp', type: 'varchar', length: 20, comment: 'Whatsapp', nullable: true })
    userDsWhatsapp: string;

    @Column({ name: 'user_cd_password', type: 'varchar', length: 50, comment: 'Password' })
    userCdPassword: string;

    @Column({ name: 'user_cd_recovery', type: 'varchar', length: 50, comment: 'Password Recovery' })
    userCdRecovery: string;

    // @Column({ name: 'user_cd_type', type: 'set', enum: Perfil, comment: 'User type: A-Administrador, G-Gerente, O-Operador, V-Visualizador', default: Perfil.VISUALIZADOR })
    @Column({ name: 'user_cd_type', type: 'char', length: 1, comment: 'User type: A-Administrador, G-Gerente, O-Operador, V-Visualizador', default: 'V' })
    userCdType: string;

    @Column({ name: 'user_tx_avatar', type: 'varchar', length: 500, comment: 'Avatar', nullable: true })
    userTxAvatar: string;

    @Column({ name: 'user_vl_cashback', type: 'decimal', precision: 10, scale: 2, comment: 'Accumulated cashback total', default: 0 })
    userVlCashback: string;

    @Column({ name: 'user_vl_score', type: 'decimal', precision: 10, scale: 2, comment: 'Total score', default: 0 })
    userVlScore: string;

    @Column({ name: 'user_vl_rating', type: 'decimal', precision: 10, scale: 2, comment: 'Total Rating', default: 0 })
    userVlRating: string;

    @Column({ name: 'user_cd_refreshtoken', type: 'varchar', length: 500, nullable: true, comment: 'Refreshtoken' })
    refreshToken: RefreshToken;
}
