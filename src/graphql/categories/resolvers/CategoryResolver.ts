import { PrismaClient } from "@prisma/client";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import Category from "../model/Category";
import CategoryTypes from "../typeDefs/CategoryTypes";

const prisma = new PrismaClient()

@Resolver(Category)
export default class CategoryResolver {

  @Query(() => [Category])
  async categories() {
    const categories = await prisma.categories.findMany()

    return categories
  }

  @Mutation(() => Category)
  async createCategory(@Arg("categoryInput") categoryInput: CategoryTypes) {
    const category = await prisma.categories.create({
      data: categoryInput
    })

    return category;
  }
}