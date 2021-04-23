import mongoose from "mongoose";
const { Schema } = mongoose;

const MemorySchema = new Schema ({
    title:  {
        type: String,
        min: 3,
        max: 255
    },
    description: {
        type: String,
        min: 3,
        max: 1000
    }
})

const Memory = mongoose.model("Memory", MemorySchema);

export default Memory;
