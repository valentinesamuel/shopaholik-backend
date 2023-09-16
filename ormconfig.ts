import { Order } from 'src/order/entities/order.entity';
import { OrderedItem } from 'src/ordered-item/entities/ordered-item.entity';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { Product } from 'src/product/entities/product.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ORMConfig: DataSourceOptions = {
  type: 'postgres',
  database: `shopaholikDB`,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Product, Supplier, OrderedItem, Order, Personnel, User],
  synchronize: true,
};

export default ORMConfig;
