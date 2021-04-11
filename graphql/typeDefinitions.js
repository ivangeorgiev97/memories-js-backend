import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";

export default mergeTypeDefs([userType]);
