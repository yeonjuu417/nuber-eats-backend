import { CreateRestaurantInputDto } from './dtos/create-restaurant';
import { Restaurant } from './restaurant.entity';
export declare class RestaurantsResolver {
    restaurants(veganOnly: boolean): Restaurant[];
    createRestaurant(createRestaurantInputDto: CreateRestaurantInputDto): boolean;
}
