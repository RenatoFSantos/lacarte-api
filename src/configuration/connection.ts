import { Ingredient } from "./../entity/Ingredient";

import { createConnection } from "typeorm";
import { Address } from "../entity/Address";
import { Category } from "../entity/Category";
import { Company } from "../entity/Company";
import { Fidelity } from "../entity/Fidelity";
import { Menu } from "../entity/Menu";
import { Product } from "../entity/Product";
import { RefreshToken } from "../entity/RefreshToken";
import { Segment } from "../entity/Segment";
import { User } from "../entity/User";
import { UserAddress } from "../entity/UserAddress";
import { ProductIngredient } from "../entity/ProductIngredient";
import { Order } from "../entity/Order";
import { OrderMenu } from "../entity/OrderMenu";
import { Promotion } from "../entity/Promotion";
import { Voucher } from "../entity/Voucher";
export default {
  createConnection: async () => {
    console.log('Conectando Base de Dados!');
    await createConnection({
      type: "postgres",
      host: "silly.db.elephantsql.com",
      port: 5432,
      username: "vledfypm",
      password: "ioY0dhj4KTHU5q8G9Ms1BQuZCJRDVDiX",
      database: "vledfypm",
      synchronize: true,
      logging: false,
    });
  },
};
