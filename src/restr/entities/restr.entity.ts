import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Restaurant { 
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number

    @Field(type => String ) 
    @Column()
    name: string;

    @Field(type => Boolean, {nullable:true} ) 
    @Column()
    isVegan: boolean;

    @Field(type => String ) 
    @Column()
    address: string;

    @Field(type => String ) 
    @Column()
    owner: string;

    @Field(type => String )
    @Column() 
    categoryName: string; 
    
}