import express from "express";
import {ApolloServer} from "apollo-server-express";
import dotenv from "dotenv";
import schema from "./graphql/gql-schema.js";
import { getContext } from "./helpers/context.js";
import { formatErr } from "./helpers/format-err.js";

import mongoose from "mongoose";

dotenv.config();

const dbUrl = process.env.MONGODB_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    autoIndex: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log('connected to db')
}).catch((e)=> {
    console.log(e);
})

async function startServer() {
  const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
      const token = req.headers.authorization || '';
      const context = await getContext(req, token);
      return context;
    },
    formatErr,
  });
  await server.start();

  const expressApp = express();
  server.expressApplyMiddleware({ expressApp });
  await new Promise(resolve => expressApp.listen({ port: process.env.PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  return { server, expressApp };
}

startServer();
