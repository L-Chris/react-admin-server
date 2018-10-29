import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @ManyToOne(type => Shop, shop => shop.orders)
  shop: Shop;

  @ManyToMany(type => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column()
  price: string;

  @Column()
  isPay: boolean;

  @Column()
  createTime: string;
}