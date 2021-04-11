import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";

export default mergeResolvers([userResolver]);
