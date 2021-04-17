import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import gameResolver from "./resolvers/game.js";

export default mergeResolvers([userResolver, gameResolver]);
