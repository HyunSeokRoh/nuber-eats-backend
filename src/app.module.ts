import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestrModule } from './restr/restr.module';
import { TypeOrmModule } from "@nestjs/Typeorm" ; 
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi" ;
import { Restaurant } from './restr/entities/restr.entity';

console.log("Start"); 

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test' , 
        ignoreEnvFile: process.env.NODE_ENV === 'prd' , 
        validationSchema: Joi.object({
          NODE_ENV: Joi.string().valid('dev','prd').required() , 
          DB_HOST: Joi.string().required(), 
          DB_PORT: Joi.string().required(),
          DB_USER: Joi.string().required(), 
          DB_PASS: Joi.string().required(), 
          DB_NAME: Joi.string().required(), 
        })
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST, 
        port: +process.env.DB_PORT,
        username: process.env.DB_USER, 
        password: process.env.DB_PASS, 
        database: process.env.DB_NAME , 

        synchronize: process.env.NODE_ENV !== 'prd' , 
        logging: true, 
        entities: [Restaurant], 
      }) ,
      GraphQLModule.forRoot(
        {
          autoSchemaFile: true , 
        }
      ),
      RestrModule , 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
