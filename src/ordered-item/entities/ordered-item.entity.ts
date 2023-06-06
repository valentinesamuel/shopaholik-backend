import { ProductCategory } from 'src/utils/Types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderedItem {
  @PrimaryGeneratedColumn('uuid')
  ordered_item_id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  unit_price: number;

  @Column({ enum: ProductCategory, nullable: false })
  category: ProductCategory;

  @Column()
  total_price: number;
}
