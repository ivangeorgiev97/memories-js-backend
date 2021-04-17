import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";
import gameType from "./types/memory.js";

export default mergeTypeDefs([userType, gameType]);
