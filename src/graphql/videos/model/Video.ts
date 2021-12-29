import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Video {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category_id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}