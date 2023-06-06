import { OrderedItem } from 'src/ordered-item/entities/ordered-item.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { ShippingStatus } from 'src/utils/Types';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column({ unique: true, nullable: false })
  orderNumber: string;

  @Column()
  dateOfOrder: string;

  @Column({ enum: ShippingStatus, unique: true, nullable: false })
  shippingStatus: string;

  @Column()
  price: number;

  @Column()
  estimatedTimeOfArrival: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.orders)
  supplier: Supplier;

  @OneToMany(() => OrderedItem, (orderedItem) => orderedItem.ordered_item_id)
  items: OrderedItem[];
}
