import {ApolloServer} from 'apollo-server-express';

//Impports: GraphQL TypeDef & Resolvers

import TYPEDEFS from './typedefs/types';
import Querys from './resolvers/query';
import Mutation from './resolvers/mutation';

//GraphQL: Schema
const SERVER = new ApolloServer({
    typeDefs: TYPEDEFS,
    resolvers: {Querys,Mutation},
    context: async context => ({
      ...context
    }),
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