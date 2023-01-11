import { Ingredient } from './../entity/Ingredient';

import { createConnection } from 'typeorm';
import { Address } from '../entity/Address';
import { Category } from '../entity/Category';
import { Company } from '../entity/Company';
import { Fidelity } from '../entity/Fidelity';
import { Menu } from '../entity/Menu';
import { Product } from '../entity/Product';
import { RefreshToken } from '../entity/RefreshToken';
import { Segment } from '../entity/Segment';
import { User } from '../entity/User';
import { UserAddress } from '../entity/UserAddress';
import { ProductIngredient } from '../entity/ProductIngredient';
import { Order } from '../entity/Order';
import { OrderMenu } from '../entity/OrderMenu';
import { Promotion } from '../entity/Promotion';
import { Voucher } from '../entity/Voucher';
const cfg = require('../../ormconfig.json');

export default {
  createConnection: async () => {
    await createConnection({
      type: cfg.type,
      host: cfg.host,
      port: cfg.port,
      username: cfg.username,
      password: cfg.password,
      database: cfg.database,
      synchronize: true,
      logging: false,
      entities: [
        User,
        Address,
        UserAddress,
        Segment,
        Company,
        Promotion,
        Fidelity,
        Category,
        Product,
        Ingredient,
        ProductIngredient,
        Menu,
        RefreshToken,
        Order,
        OrderMenu,
        Voucher
      ]
    });
  }
}