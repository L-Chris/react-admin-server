import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";
import { User } from "modules/user/user.entity";
import { OrderType } from "./order-type.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => OrderType, type => type.orders)
  type: OrderType;

  @ManyToOne(type => User, user => user.orders)
  user: User;

  @ManyToOne(type => Shop, shop => shop.orders)
  shop: Shop;

  @ManyToMany(type => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column()
  price: number;

  @Column()
  createTime: string;
}