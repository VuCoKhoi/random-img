import { ApolloServer, gql } from 'apollo-server-micro'
import superagent from 'superagent'
import dotenv from 'dotenv'

dotenv.config()

const typeDefs = gql`
  type Query {
    images: [Image!]!
    image(width: Int, height: Int): AutoImage!
  }
  type Image {
    id: String
    title: String
    description: String
    datetime: Int
    type: String
    animated: Boolean
    width: Int!
    height: Int!
    size: Int!
    views: Int
    bandwidth: Int
    vote: Int
    favorite: Boolean
    nsfw: Boolean
    section: String
    account_url: String
    account_id: String
    is_ad: Boolean
    in_most_viral: Boolean
    has_sound: Boolean
    tags: [String]
    in_gallery: Boolean
    topic: String
    topic_id: Int
    link: String!
    comment_count: Int
    favorite_count: Int
    ups: Int
    downs: Int
    points: Int
    score: Int
    is_album: Boolean
  }
  type AutoImage {
    link: String
  }
`

const resolvers = {
  Query: {
    // return list image from imgur
    images: async (_, __, context) => {
      console.log(context)
      const result = await superagent
        .get('https://api.imgur.com/3/gallery/random/random/0')
        .set('Authorization', `Client-ID ${process.env.IMGUR_CLIENT_ID}`)
        .set('Accept', 'application/json')

      return result.body.data.filter((data) => data.type)
    },

    // random image
    image: (_, { width = 1024, height = 768 }) => ({
      link: `https://picsum.photos/seed/${
        Math.random() * 10000
      }/${width}/${height}`,
    }),
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
