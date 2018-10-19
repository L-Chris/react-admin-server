import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 30, unique: true })
  account: string;

  @Column({ length: 13, unique: true })
  phone: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column()
  createTime: string;
}