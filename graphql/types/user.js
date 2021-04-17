export default `

    input UserInput {
        email: String!
        password: String!
        memories: [String]
    }

    type User {
        _id: String!
        email: String!
        password: String!
        memories: [Memory]
    }

    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        createUser(data: UserInput!): User
        updateUser(_id: String!, data: UserInput!): User
        deleteUser(_id: String!): User
        login(email: String!, password: String!): String
        logout: User
    }

`
