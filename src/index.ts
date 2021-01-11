require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { connectDatabase } from './database';
import { Listing } from './database/models/listing';
import { ListingResolver } from './graphql';

const mount = async (app: Application) => {
    await connectDatabase();

    const schema = await buildSchema({
        resolvers: [ListingResolver],
    });

    const server = new ApolloServer({
        schema,
        context: () => ({ listing: Listing }),
    });
    server.applyMiddleware({ app, path: '/api' });

    app.listen(process.env.PORT);
    console.log(`[app] : http://localhost:${process.env.PORT}`);
};

mount(express());
