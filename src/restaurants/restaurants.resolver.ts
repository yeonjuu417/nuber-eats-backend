import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant } from './restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
