import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Category {
  @Field()
  id: String;
  
  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}