import { Module } from '@nestjs/common';
import {RestrResolver} from './restr.resolver' ; 


@Module({
    providers: [RestrResolver], 
})
export class RestrModule {}
