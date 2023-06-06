import { ProductCategory, StockStatus } from 'src/utils/Types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  @Column()
  name: string;

  @Column({ enum: ProductCategory })
  category: string;

  @Column()
  product_code: string;

  @Column()
  quantity_in_stock: number;

  @Column()
  min_quantity: number;

  @Column()
  unit_price: number;

  @Column()
  date_of_arrival: string;

  @Column()
  expiry_date: string;

  @Column()
  supplier_id: string;

  @Column()
  quantity?: number;

  @Column()
  quantity_sold?: number;

  @Column()
  unit_of_measurement: string;

  @Column()
  shelf_life_duration: string;

  @Column({ enum: StockStatus })
  stock_status: string;
}
