import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  supplier_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  last_order_date: string;

  @Column()
  profile_pic_url: string;

  @Column()
  state: string;

  @Column()
  additional_infromation?: string;

  @OneToMany(() => Order, (order) => order.supplier, { eager: true })
  orders: Order[];
}
