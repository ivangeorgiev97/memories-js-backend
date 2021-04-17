import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import memoryResolver from "./resolvers/memory.js";

export default mergeResolvers([userResolver, memoryResolver]);
