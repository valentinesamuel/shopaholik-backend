import { Injectable } from '@nestjs/common';
import { SupplierService } from './supplier/supplier.service';
import { OrderService } from './order/order.service';

@Injectable()
export class AppService {
  async seedDatabase() {
    // const supplier1 = {
    //   name: 'Sizzle Fitness',
    //   address: '267 Toutu Circle',
    //   email: 'guli@jim.mw',
    //   phone: '(566) 281-5556',
    //   last_order_date: '2023-12-10T23:51:39+01:00',
    //   profile_pic_url: '',
    //   state: 'Faovfot',
    //   additional_infromation: 'Fitness equipments',
    //   orders: [],
    // };
    // const newSupplier1 = await this.supplierService.createSupplier(supplier1);
    // const supplier2 = {
    //   name: 'Foodies Heaven',
    //   address: '617 Omvez Plaza',
    //   email: 'sumoku@ri.na',
    //   phone: '(621) 490-7162',
    //   last_order_date: '2022-02-10T05:57:53+01:00',
    //   profile_pic_url: '',
    //   state: 'Egenawwav',
    //   additional_infromation: 'Sells food',
    //   orders: [],
    // };
    // const newSupplier2 = await this.supplierService.createSupplier(supplier2);
    // const supplier3 = {
    // name: 'Exkwezeet Fabrics',
    // address: '715 Dovno Highway',
    // email: 'tir@mu.ke',
    // phone: '(454) 208-3423',
    // last_order_date: '(369) 230-4005',
    // profile_pic_url: '',
    // state: 'Tubudfol1',
    // additional_infromation: 'High grade fabrics',
    // orders: [],
    // };
    // const newSupplier3 = await this.supplierService.createSupplier(supplier3);
    // const supplier4 = {
    //   name: 'Hexclusive Wears',
    //   address: '437 Recuh Terrace',
    //   email: 'viereab@mutul.do',
    //   phone: '(971) 312-4098',
    //   last_order_date: '2023-10-11T12:00:20+01:00',
    //   profile_pic_url: '',
    //   state: 'Kejjozip',
    //   additional_infromation: 'Clothing wears and accessories',
    //   orders: [],
    // };
    // const newSupplier4 = await this.supplierService.createSupplier(supplier4);

    //Orders
    const order1 = {
      dateOfOrder: '2023-01-22T16:16:48+01:00',
      shippingStatus: 'CONFIRMED',
      price: 100,
      estimatedTimeOfArrival: '2023-02-22T10:16:48+01:00',
      supplier_id: '123456789',
    };
    // const newOrder1 = await this.orderService.createOrder();
  }
}
