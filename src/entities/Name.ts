import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({name:"names"})
export class Name {
    @PrimaryColumn({length:10})
    name: string;

    @Column({nullable: false, type:"integer", default: 0})
    count: number;
}