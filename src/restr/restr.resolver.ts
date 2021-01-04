import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestrDto } from './dtos/create-rstr.dto';
import { Restaurant } from './entities/restr.entity';

@Resolver(of => Restaurant)
export class RestrResolver{
    @Query(returns => [Restaurant] ) 
    myResr(@Args('veganOnly') veganOnly:boolean ) : Restaurant[]  { 
        console.log(veganOnly) ; 
        return []; 
    }

    @Mutation(returns => Boolean ) 
    createRest( @Args() CreateRestrDto:CreateRestrDto , 
    ):boolean { 
        console.log(CreateRestrDto) ; 
        return true;
    }
} 
