import { PrimaryGeneratedColumn, Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Dish } from "modules/dish/dish.entity";
import { Order } from "modules/order/order.entity";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;
  
  @OneToMany(type => Order, order => order.shop)
  orders: Order[];

  @ManyToMany(type => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column()
  createTime: string;
}