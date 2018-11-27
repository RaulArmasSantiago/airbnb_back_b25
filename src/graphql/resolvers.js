//Mongodb Models
import User from '../models/Users';

import {GraphQLScalarType} from 'graphql';
import {kind} from 'graphql/language';
import {ObjectID} from 'mongodb';

//GraphQL: Resolvers
const RESOLVERS = {
    /*
    ObjectID: new GraphQLScalarType({
        name:'ObjectID',
        description: 'The `ObjectID` scalar type represents a [`BSON`](https://en.wikipedia.org/wiki/BSON) ID commonly used in `mongodb`.',
        serialize(_id){
            if (_id instanceof ObjectID){
                return _id.toHexString()
            }else if(typeof _id === 'string'){
                return _id
            }else{
                throw new Error (`${Object.getPrototypeOf(_id).constructor.name} not convertible to `)
            }
        },
        parseValue(_id){
            if (typeof _id === 'string') {
                return ObjectID.createFromHexString(_id)
            }else{
                throw new Error(`${typeof _id} not convertible to ObjectID`)
            }
        },
        parseLiteral(ast){
            if (ast.kind === kind.STRING) {
                return ObjectID.createFromHexString(ast.value)
            }else{
                throw new Error(`${ast.kind} not convertible to ObjectID`)
            }
        },
    }),*/

    Query: {

        hola: ((parent, args, context, info) => {
            return `Hola ${args.name || 'mundo'}`;
        }),

        //Pedir lista de usuarios
        async allUsers(){
            const user = await User.find();
            return user.map(x => {
                //console.log(typeof x._id, x._id);
                //console.log(typeof x._id.str, x._id.str);
                return x;
            })
        },
    },

    Mutation: {
        //Crear Usuario
        async createUser(root, {input}){
            return User.create(input).then(user => {
                return user.toObject()
            }).catch(err => {throw err})
        }
    }
};

//Exports
export default RESOLVERS;