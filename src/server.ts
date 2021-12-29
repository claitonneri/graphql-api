import "reflect-metadata"

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

import VideoResolver from "./graphql/videos/resolvers/VideoResolver"
import CategoryResolver from "./graphql/categories/resolvers/CategoryResolver"


async function main() { 
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver]
  })

  const server = new ApolloServer({ schema })

  server.listen({ port: 4000 }, () => console.log("API running on port 4000"))
}

main()