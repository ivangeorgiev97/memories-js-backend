import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "./typeDefinitions.js";
import resolvers from "./resolvers.js";

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
