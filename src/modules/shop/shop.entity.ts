import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable } from "typeorm";
import { Menu } from "modules/menu/menu.entity";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ charset: 'utf8', length: 20 })
  name: string;

  @ManyToMany(type => Menu)
  @JoinTable()
  menu: Menu;

  @Column()
  createTime: string;
}