import { PrimaryGeneratedColumn, OneToMany, Entity, Column } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class OrderType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;

  @OneToMany(type => Order, order => order.type)
  orders: Order[];
}