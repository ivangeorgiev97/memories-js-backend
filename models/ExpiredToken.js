import mongoose from "mongoose";
const { Schema } = mongoose;

const ExpiredTokenSchema = new Schema ({
    jwt: String
})

const ExpiredToken = mongoose.model("ExpiredToken", ExpiredTokenSchema);

export default ExpiredToken;
