import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestrModule } from './restr/restr.module';

@Module({
  imports: [
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
