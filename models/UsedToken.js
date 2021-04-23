import mongoose from "mongoose";
const { Schema } = mongoose;

const UsedTokenSchema = new Schema ({
    jwt: String
})

const UsedToken = mongoose.model("UsedToken", UsedTokenSchema);

export default UsedToken;
