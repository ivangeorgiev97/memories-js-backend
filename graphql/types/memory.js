export default `

    type Memory {
        _id: String!
        title: String!
        description: String!
    }

    input CreateMemoryInput {
        title: String!
        description: String!
    }

    type Query {
        Memory(_id: String!): Memory
        Memories: [Memory]
    }

    type Mutation {
        createMemory(data: CreateMemoryInput!): Memory
        editMemory(_id: String!, data: CreateMemoryInput!): Memory
        deleteMemory(_id: String!): Memory
    }

`
