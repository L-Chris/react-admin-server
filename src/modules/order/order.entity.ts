import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable } from "typeorm";
import { Dish } from "modules/dish/dish.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

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