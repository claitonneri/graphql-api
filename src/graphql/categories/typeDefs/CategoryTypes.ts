import { Field, InputType } from "type-graphql";

@InputType()
export default class CategoryTypes { 
  @Field()
  name: string;

  @Field()
  description: string;
}