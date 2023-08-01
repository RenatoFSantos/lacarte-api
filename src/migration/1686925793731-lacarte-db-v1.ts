import { MigrationInterface, QueryRunner } from "typeorm";

export class lacarteDbV11686925793731 implements MigrationInterface {
  name = "lacarteDbV11686925793731";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Address\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`addr_nm_address\` varchar(50) NULL COMMENT 'Address Name', \`addr_cd_type\` char(1) NOT NULL COMMENT 'Address type: R-Residencial, C-Comercial' DEFAULT 'R', \`addr_ds_address\` varchar(100) NOT NULL COMMENT 'Address', \`addr_ds_number\` varchar(10) NULL COMMENT 'Address number', \`addr_ds_complement\` varchar(100) NULL COMMENT 'Address complement', \`addr_nm_district\` varchar(100) NULL COMMENT 'District', \`addr_nm_city\` varchar(50) NOT NULL COMMENT 'City', \`addr_sg_state\` varchar(2) NULL COMMENT 'State', \`addr_cd_zipcode\` varchar(8) NOT NULL COMMENT 'Zipcode', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Category\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`cate_nm_category\` varchar(50) NOT NULL COMMENT 'Category name', \`cate_tx_image\` varchar(500) NULL COMMENT 'Category image', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Segment\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`seg_nm_segment\` varchar(100) NOT NULL COMMENT 'Segment name', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`RefreshToken\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`expiresIn\` int NOT NULL, \`userId\` varchar(50) NOT NULL, \`userUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`User\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_sg_user\` varchar(20) NOT NULL COMMENT 'Codname', \`user_nm_name\` varchar(25) NOT NULL COMMENT 'Name', \`user_nm_lastname\` varchar(50) NULL COMMENT 'Lastname', \`user_dt_birthdate\` datetime NULL COMMENT 'Birth Date', \`user_ds_email\` varchar(100) NOT NULL COMMENT 'Email', \`user_ds_phone\` varchar(20) NULL COMMENT 'Phone', \`user_ds_smartphone\` varchar(20) NULL COMMENT 'Smartphone', \`user_ds_whatsapp\` varchar(20) NULL COMMENT 'Whatsapp', \`user_cd_password\` varchar(50) NOT NULL COMMENT 'Password', \`user_cd_recovery\` varchar(50) NOT NULL COMMENT 'Password Recovery', \`user_cd_type\` char(1) NOT NULL COMMENT 'User type: A-Administrador, G-Gerente, O-Operador, V-Visualizador' DEFAULT 'V', \`user_tx_avatar\` varchar(500) NULL COMMENT 'Avatar', \`user_vl_cashback\` decimal(10,2) NOT NULL COMMENT 'Accumulated cashback total' DEFAULT '0.00', \`user_vl_score\` decimal(10,2) NOT NULL COMMENT 'Total score' DEFAULT '0.00', \`user_vl_rating\` decimal(10,2) NOT NULL COMMENT 'Total Rating' DEFAULT '0.00', \`user_cd_refreshtoken\` varchar(500) NULL COMMENT 'Refreshtoken', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Company\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`comp_nm_company\` varchar(100) NOT NULL COMMENT 'Company name' DEFAULT '', \`comp_nm_trademark\` varchar(100) NULL COMMENT 'Trade name', \`comp_ds_company\` varchar(500) NULL COMMENT 'Description', \`comp_cd_cnpj\` varchar(20) NOT NULL COMMENT 'CNPJ' DEFAULT '', \`comp_ds_phone\` varchar(20) NULL COMMENT 'Phone', \`comp_ds_smartphone\` varchar(20) NULL COMMENT 'Smartphone', \`comp_ds_whatsapp\` varchar(20) NULL COMMENT 'Whatsapp', \`comp_ds_email\` varchar(80) NOT NULL COMMENT 'Email' DEFAULT '', \`comp_ds_site\` varchar(80) NULL COMMENT 'Whatsapp', \`comp_cd_pix\` varchar(20) NULL COMMENT 'PIX', \`comp_tx_image\` varchar(500) NULL COMMENT 'Image default', \`comp_in_delivery\` tinyint NOT NULL COMMENT 'Delivery 0 = False/ 1 = true' DEFAULT 0, \`comp_cd_delivery\` char(1) NOT NULL COMMENT 'Delivery type = V-Fixed value / P-Percent' DEFAULT 'P', \`comp_vl_delivery\` decimal(10,2) NULL COMMENT 'Delivery value', \`comp_ds_tags\` varchar(200) NULL COMMENT 'Tags', \`comp_vl_rating\` decimal(10,2) NULL COMMENT 'Rating', \`comp_ds_logo\` varchar(500) NULL COMMENT 'Logo', \`segmentUid\` char(36) NULL, \`addressUid\` char(36) NULL, \`userUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Promotion\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`prom_nm_promotion\` varchar(100) NOT NULL COMMENT 'promotion name' DEFAULT '', \`prom_ds_promotion\` varchar(500) NULL COMMENT 'promotion description', \`prom_cd_qrcode\` varchar(500) NOT NULL COMMENT 'qrcode image' DEFAULT '', \`prom_dt_start\` timestamp(6) NOT NULL COMMENT 'Start date', \`prom_dt_finish\` timestamp(6) NOT NULL COMMENT 'Finish date', \`prom_cd_status\` char(1) NOT NULL COMMENT 'Status: A-Active, C-Closed, P-Pending, ' DEFAULT 'P', \`companyUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Fidelity\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`fide_in_validate\` tinyint NOT NULL COMMENT 'Valid: 0 - False, 1 - True' DEFAULT 1, \`fide_qn_voucher\` int NOT NULL COMMENT 'Number of vouchers' DEFAULT '0', \`promotionUid\` char(36) NULL, \`userUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Ingredient\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ingr_cd_ingredient\` varchar(45) NOT NULL COMMENT 'Ingredient code', \`ingr_nm_ingredient\` varchar(45) NOT NULL COMMENT 'Name', \`ingr_ds_ingredient\` varchar(45) NULL COMMENT 'Description', \`ingr_sg_unit\` varchar(5) NOT NULL COMMENT 'Ingredient unit', \`ingr_qn_unit\` decimal(10,2) NOT NULL COMMENT 'Value of the weight or basic unit of movement of the input in the stock.' DEFAULT '0.00', \`ingr_vl_average\` decimal(2,2) NOT NULL COMMENT 'Average ingredient price' DEFAULT '0.00', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Product\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`prod_cd_standard\` varchar(15) NULL COMMENT 'Standard product code', \`prod_nm_product\` varchar(50) NOT NULL COMMENT 'Product name' DEFAULT '', \`prod_ds_product\` varchar(500) NULL COMMENT 'Product description', \`prod_ds_recipe\` varchar(500) NULL COMMENT 'Recipe', \`prod_tx_image\` varchar(100) NULL COMMENT 'Standard product image', \`prod_ds_descriptor\` varchar(200) NULL COMMENT 'List of descritores to facilitasse the search for products (start descriptors with #)', \`categoryUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Menu\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`menu_cd_menu\` varchar(15) NOT NULL COMMENT 'Code on menu', \`menu_vl_price\` decimal(10,2) NOT NULL COMMENT 'Price' DEFAULT '0.00', \`menu_pr_discount\` decimal(5,2) NOT NULL COMMENT 'Discount tax' DEFAULT '0.00', \`menu_pr_delivery\` decimal(5,2) NOT NULL COMMENT 'Delivery tax' DEFAULT '0.00', \`menu_tx_image\` varchar(50) NULL COMMENT 'Product image', \`menu_pr_cashback\` decimal(5,2) NOT NULL COMMENT 'Cashback tax' DEFAULT '0.00', \`menu_ds_descriptor\` varchar(50) NULL COMMENT 'List of descritores to facilitasse the search for products (start descriptors with #)', \`menu_vl_rating\` decimal(5,2) NOT NULL COMMENT 'Rating of menu option' DEFAULT '0.00', \`companyUid\` char(36) NULL, \`productUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`UserAddress\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`usad_in_default\` tinyint NOT NULL COMMENT 'Default Address (0-Falte, 1=True)' DEFAULT 1, \`userUid\` char(36) NULL, \`addressUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Order\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`orde_qn_total\` decimal(10,2) NOT NULL COMMENT 'Total amount' DEFAULT '0.00', \`orde_vl_discount\` decimal(10,2) NOT NULL COMMENT 'Total discount amount' DEFAULT '0.00', \`orde_vl_delivery\` decimal(10,2) NOT NULL COMMENT 'Total delivery value' DEFAULT '0.00', \`orde_vl_total\` decimal(10,2) NOT NULL COMMENT 'Total order value' DEFAULT '0.00', \`orde_in_payment\` varchar(3) NOT NULL COMMENT 'Payment methods: CRE-Credcard, DEB-Debit, CSH-Cash, PIX, VCH-Voucher' DEFAULT 'CSH', \`userAddressUid\` char(36) NULL, \`companyUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`OrderMenu\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`orme_qn_item\` smallint NOT NULL COMMENT 'Itens amount' DEFAULT '1', \`orme_vl_item\` decimal(10,2) NOT NULL COMMENT 'Unit value without discount' DEFAULT '0.00', \`orme_vl_discount\` decimal(10,2) NOT NULL COMMENT 'Value of discount' DEFAULT '0.00', \`orme_vl_total\` decimal(10,2) NOT NULL COMMENT 'Total item value' DEFAULT '0.00', \`orme_vl_rating\` decimal(10,2) NOT NULL COMMENT 'Item rating' DEFAULT '0.00', \`orderUid\` char(36) NULL, \`menuUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`ProductIngredient\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`prin_qn_recipe\` decimal(10,2) NOT NULL COMMENT 'Amount used in recipe' DEFAULT '0.00', \`prin_vl_ingredient\` decimal(10,2) NOT NULL COMMENT 'Ingredient cost' DEFAULT '0.00', \`prin_ds_recipe\` varchar(250) NULL COMMENT 'Recipe', \`productUid\` char(36) NULL, \`ingredientUid\` char(36) NULL, PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`vledfypm\`.\`Voucher\` (\`uid\` char(36) NOT NULL, \`active\` tinyint NOT NULL COMMENT 'Active: 0 = False/ 1 = true' DEFAULT 1, \`deleted\` tinyint NOT NULL COMMENT 'Deleted: 0 = False/ 1 = true' DEFAULT 0, \`created\` timestamp(6) NOT NULL COMMENT 'Creation date' DEFAULT CURRENT_TIMESTAMP(6), \`updated\` timestamp(6) NOT NULL COMMENT 'Update date' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`vouc_cd_code\` varchar(6) NOT NULL COMMENT 'Voucher code', \`vouc_vl_expiresin\` int NOT NULL COMMENT 'Time of expiration', PRIMARY KEY (\`uid\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`RefreshToken\` ADD CONSTRAINT \`FK_27eea6b2033c9e18a1d3f8fccc2\` FOREIGN KEY (\`userUid\`) REFERENCES \`vledfypm\`.\`User\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` ADD CONSTRAINT \`FK_dd83d564a0beb3aeee270baf87c\` FOREIGN KEY (\`segmentUid\`) REFERENCES \`vledfypm\`.\`Segment\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` ADD CONSTRAINT \`FK_6f9af490726417ac4d0377ffaec\` FOREIGN KEY (\`addressUid\`) REFERENCES \`vledfypm\`.\`Address\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` ADD CONSTRAINT \`FK_5d290a4e950859af0b39b8881ba\` FOREIGN KEY (\`userUid\`) REFERENCES \`vledfypm\`.\`User\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Promotion\` ADD CONSTRAINT \`FK_2156bd29b28f70378b274cdcfff\` FOREIGN KEY (\`companyUid\`) REFERENCES \`vledfypm\`.\`Company\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Fidelity\` ADD CONSTRAINT \`FK_b9508af64e87867bb8d17ea3ada\` FOREIGN KEY (\`promotionUid\`) REFERENCES \`vledfypm\`.\`Promotion\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Fidelity\` ADD CONSTRAINT \`FK_3b14091d44979cad9a2ba77ec3b\` FOREIGN KEY (\`userUid\`) REFERENCES \`vledfypm\`.\`User\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Product\` ADD CONSTRAINT \`FK_cef8f3b91a8f1e1351567995ae4\` FOREIGN KEY (\`categoryUid\`) REFERENCES \`vledfypm\`.\`Category\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Menu\` ADD CONSTRAINT \`FK_e698d49e25e012e8991d0aa76ad\` FOREIGN KEY (\`companyUid\`) REFERENCES \`vledfypm\`.\`Company\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Menu\` ADD CONSTRAINT \`FK_0d252d9193d5c232135dd0744f6\` FOREIGN KEY (\`productUid\`) REFERENCES \`vledfypm\`.\`Product\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`UserAddress\` ADD CONSTRAINT \`FK_d15f8d6af0a991901642675cbde\` FOREIGN KEY (\`userUid\`) REFERENCES \`vledfypm\`.\`User\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`UserAddress\` ADD CONSTRAINT \`FK_87d4e7df399940297a0bdcf53a2\` FOREIGN KEY (\`addressUid\`) REFERENCES \`vledfypm\`.\`Address\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Order\` ADD CONSTRAINT \`FK_7dab6d08aeb58e2f72296ba0186\` FOREIGN KEY (\`userAddressUid\`) REFERENCES \`vledfypm\`.\`UserAddress\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Order\` ADD CONSTRAINT \`FK_66e28acd0e48caca847c8d530f8\` FOREIGN KEY (\`companyUid\`) REFERENCES \`vledfypm\`.\`Company\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`OrderMenu\` ADD CONSTRAINT \`FK_b6e6b0baf46a700aabc3050c2e4\` FOREIGN KEY (\`orderUid\`) REFERENCES \`vledfypm\`.\`Order\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`OrderMenu\` ADD CONSTRAINT \`FK_c05cfd45182d471c86ce66334af\` FOREIGN KEY (\`menuUid\`) REFERENCES \`vledfypm\`.\`Menu\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`ProductIngredient\` ADD CONSTRAINT \`FK_ff7cd17d313a3f67c4897c31f2f\` FOREIGN KEY (\`productUid\`) REFERENCES \`vledfypm\`.\`Product\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`ProductIngredient\` ADD CONSTRAINT \`FK_114cefa162448b21e05a7cced5d\` FOREIGN KEY (\`ingredientUid\`) REFERENCES \`vledfypm\`.\`Ingredient\`(\`uid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`ProductIngredient\` DROP FOREIGN KEY \`FK_114cefa162448b21e05a7cced5d\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`ProductIngredient\` DROP FOREIGN KEY \`FK_ff7cd17d313a3f67c4897c31f2f\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`OrderMenu\` DROP FOREIGN KEY \`FK_c05cfd45182d471c86ce66334af\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`OrderMenu\` DROP FOREIGN KEY \`FK_b6e6b0baf46a700aabc3050c2e4\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Order\` DROP FOREIGN KEY \`FK_66e28acd0e48caca847c8d530f8\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Order\` DROP FOREIGN KEY \`FK_7dab6d08aeb58e2f72296ba0186\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`UserAddress\` DROP FOREIGN KEY \`FK_87d4e7df399940297a0bdcf53a2\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`UserAddress\` DROP FOREIGN KEY \`FK_d15f8d6af0a991901642675cbde\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Menu\` DROP FOREIGN KEY \`FK_0d252d9193d5c232135dd0744f6\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Menu\` DROP FOREIGN KEY \`FK_e698d49e25e012e8991d0aa76ad\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Product\` DROP FOREIGN KEY \`FK_cef8f3b91a8f1e1351567995ae4\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Fidelity\` DROP FOREIGN KEY \`FK_3b14091d44979cad9a2ba77ec3b\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Fidelity\` DROP FOREIGN KEY \`FK_b9508af64e87867bb8d17ea3ada\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Promotion\` DROP FOREIGN KEY \`FK_2156bd29b28f70378b274cdcfff\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` DROP FOREIGN KEY \`FK_5d290a4e950859af0b39b8881ba\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` DROP FOREIGN KEY \`FK_6f9af490726417ac4d0377ffaec\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`Company\` DROP FOREIGN KEY \`FK_dd83d564a0beb3aeee270baf87c\``
    );
    await queryRunner.query(
      `ALTER TABLE \`vledfypm\`.\`RefreshToken\` DROP FOREIGN KEY \`FK_27eea6b2033c9e18a1d3f8fccc2\``
    );
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Voucher\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`ProductIngredient\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`OrderMenu\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Order\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`UserAddress\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Menu\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Product\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Ingredient\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Fidelity\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Promotion\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Company\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`User\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`RefreshToken\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Segment\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Category\``);
    await queryRunner.query(`DROP TABLE \`vledfypm\`.\`Address\``);
  }
}
