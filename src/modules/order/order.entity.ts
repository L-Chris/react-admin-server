import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Dish } from "modules/dish/dish.entity";
import { Shop } from "modules/shop/shop.entity";
import { User } from "modules/user/user.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: '1',
    readonly: true
  })
  type: string;

  @ManyToOne(type => User, user => user.orders)
  user: User;

  @ManyToOne(type => Shop, shop => shop.orders)
  shop: Shop;

  @ManyToMany(type => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column()
  price: number;

  @Column({
    type: 'datetime',
    readonly: true
  })
  createTime: Date;
}