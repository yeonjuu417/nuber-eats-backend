import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantInputDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean)
  isVegan?: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownersName: string;
}
