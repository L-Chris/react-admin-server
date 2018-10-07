import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  price: string;

  @Column()
  extra: string;

  @Column()
  createTime: string;
}