import { ArgsType, Field, InputType } from "@nestjs/graphql"
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType() 
export class CreateRestrDto { 
    @Field(type => String ) 
    @IsString() 
    @Length(5,10) 
    name:string ; 
    @Field(type => Boolean ) 
    @IsBoolean() 
    isVegan:Boolean ; 
    @Field(type => String ) 
    @IsString() 
    address:string ; 
    @Field(type => String ) 
    @IsString() 
    owner:string  ;
} 
