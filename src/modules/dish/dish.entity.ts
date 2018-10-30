import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;

  @Column()
  price: number;

  @Column({ charset: 'utf8', length: 20 })
  extra: string;

  @Column()
  createTime: string;
}