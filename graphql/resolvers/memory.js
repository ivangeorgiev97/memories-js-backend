import Memory from "../../models/Memory.js";

export default {
    Query: {
        memories: async () => {
            const memories = await Memory.find({});
            return memories;
        },
        memory: async (root, {_id}) => {
            const memory = await Memory.findById(_id);
            return memory;
        }
    },
    Mutation: {
        createMemory: async(root, args) => {
            const memory = new Memory(args.data)
            await memory.save();
            return memory;
        },
        editMemory: async(root, {_id, data}) => {
            const memory = await Memory.findByIdAndUpdate(_id,
                {$set: data},
                {
                    new: true,
                    runValidators: true
                })
            return memory;
        },
        deleteMemory: async(root, {_id}) => {
            const memory = Memory.findOneAndDelete(_id);
            return memory;
        }
    }

}
