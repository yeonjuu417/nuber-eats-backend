import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateRestaurantInputDto } from './dtos/create-restaurant';
import { Restaurant } from './restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
  @Mutation(() => Boolean)
  createRestaurant(
    @Args() createRestaurantInputDto: CreateRestaurantInputDto,
  ): boolean {
    return true;
  }
}
