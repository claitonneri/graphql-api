import { Field, InputType } from "type-graphql";

@InputType()
export default class VideoTypes { 
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category_id: string;
}