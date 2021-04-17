import mongoose from "mongoose";
const { Schema } = mongoose;

const MemorySchema = new Schema ({
    title:  String,
    description: String
})

const Memory = mongoose.model("Memory", MemorySchema);

export default Memory;
