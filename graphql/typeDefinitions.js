import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";
import gameType from "./types/game.js";

export default mergeTypeDefs([userType, gameType]);
