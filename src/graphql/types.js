import {gql} from 'apollo-server-express';

//GraphQL: TypeDefs
const TYPEDEFS = gql`

    scalar ObjectID

    type User {
        _id: ObjectID,
        name:String
        lastname:String,
        email:String,
        birthdate:String,
        cellPhone:String
        natiolality:String
        img_uri:String
        sex:String
        posts:[ObjectID]
        saved:[String]
    }

    type Query {
        hola(name: String): String
        allUsers: [User]
    }

    input UserInput {
        name: String!
        lastname: String!
        password: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput) : User
    }
`;

//
export default TYPEDEFS;