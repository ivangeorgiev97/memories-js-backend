export default `

    input UserInput {
        email: String!
        password: String!
        roles: [String]
        memories: [String]
    }

    type User {
        _id: String!
        email: String!
        password: String!
        memories: [Memory]
        roles: [String]
    }

    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        register(data: UserInput!): User
        updateUser(_id: String!, data: UserInput!): User
        deleteUser(_id: String!): User
        login(email: String!, password: String!): String
        logout: User
    }

`
