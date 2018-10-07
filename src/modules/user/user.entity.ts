import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 30 })
  account: string;

  @Column({ length: 13 })
  phone: string;

  @Column()
  email: string;

  @Column()
  createTime: string;
}