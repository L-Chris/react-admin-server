import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  price: string;

  @Column()
  isPay: boolean;

  @Column()
  createTime: string;
}