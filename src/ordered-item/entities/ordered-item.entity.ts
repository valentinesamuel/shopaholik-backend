import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column()
  order_number: string;

  @Column()
  order_id: string;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  category: string;

  @Column()
  total_price: number;
}
