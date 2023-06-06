import { Product } from 'src/product/entities/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ORMConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: `${process.env.POSTGRES_DB}`,
  host: 'localhost',
  port: 5432,
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  entities: [Product],
  synchronize: true,
};

export default ORMConfig;
