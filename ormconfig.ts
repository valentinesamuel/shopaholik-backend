import { Order } from 'src/order/entities/order.entity';
import { OrderedItem } from 'src/ordered-item/entities/ordered-item.entity';
import { Product } from 'src/product/entities/product.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ORMConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: `shopaholikDB`,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Product, Supplier, OrderedItem, Order],
  synchronize: true,
};

export default ORMConfig;
