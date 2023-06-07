import { OrderedItem } from 'src/ordered-item/entities/ordered-item.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { ShippingStatus } from 'src/utils/Types';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { randomBytes } from 'crypto';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column({ unique: true, nullable: false })
  orderNumber: string;

  @Column()
  dateOfOrder: string;

  @Column({ enum: ShippingStatus, nullable: false })
  shippingStatus: string;

  @Column()
  price: number;

  @Column()
  estimatedTimeOfArrival: string;

  @Column()
  supplier_id: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.orders)
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

  @OneToMany(() => OrderedItem, (orderedItem) => orderedItem.order, {
    nullable: false,
    eager: true,
  })
  items: OrderedItem[];

  @BeforeInsert()
  generateUUID() {
    this.orderNumber = randomBytes(4).toString('hex').toUpperCase();
  }
}
