import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Dish } from "modules/dish/dish.entity";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;

  @ManyToMany(type => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column()
  createTime: string;
}