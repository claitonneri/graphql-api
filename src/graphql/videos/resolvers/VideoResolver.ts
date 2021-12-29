import { PrismaClient } from "@prisma/client";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import Video from "../model/Video";
import VideoTypes from "../typeDefs/VideoTypes";

const prisma = new PrismaClient()

@Resolver(Video)
export default class VideoResolver {

  @Query(() => [Video])
  async videos() {
    const videos = await prisma.videos.findMany()

    return videos
  }

  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") {name, description, category_id}: VideoTypes) {
    const video = await prisma.videos.create({
      data: {
        name,
        description,
        category: {
          connect: {
            id: category_id
          }
        }
      }
    })

    return video
  }
}