import {ApolloServer} from 'apollo-server-express';

//Impports: GraphQL TypeDef & Resolvers

import TYPEDEFS from './types';
import RESOLVERS from './resolvers';

//GraphQL: Schema
const SERVER = new ApolloServer({
    typeDefs: TYPEDEFS,
    resolvers: RESOLVERS,
    playground: {
      endpoint: `http://localhost:5000/graphql`,
      settings: {
        'editor.theme': 'dark'
      }
    }
  });

//Exports
//module.exports = SERVER;
export default SERVER;