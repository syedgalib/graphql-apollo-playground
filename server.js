import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './Model/schema.js';
import { Query } from './Resolvers/Query.js';
import { Product } from './Resolvers/Product.js';
import { Category } from './Resolvers/Category.js';
import { db } from './Model/db.js';

const resolvers = {
    Query,
    Product,
    Category,
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer( server, {
    listen: { port: 4000 },
    context: ( { req, res } ) => ({
        db
    }),
} );

console.log( `🚀  Server ready at: ${url}` );