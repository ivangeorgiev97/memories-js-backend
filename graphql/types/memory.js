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
        memory(_id: String!): Memory
        memories: [Memory]
    }

    type Mutation {
        createMemory(data: CreateMemoryInput!): Memory
        editMemory(_id: String!, data: CreateMemoryInput!): Memory
        deleteMemory(_id: String!): Memory
    }

`
