import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Order } from "modules/order/order.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;

  @Column({ length: 30, unique: true })
  account: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column()
  createTime: string;

  @OneToMany(type => Order, order => order.user)
  orders: Order[];
}