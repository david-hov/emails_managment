import Fastify, { FastifyInstance } from 'fastify';
import { emailRoutes } from './routes/email.routes';
import { connectDB } from './db/index';
import cors from '@fastify/cors'

const fastify: FastifyInstance = Fastify({
    logger: true,
});

fastify.register(cors, emailRoutes);

const start = async (): Promise<void> => {
    try {
        await connectDB();
        await fastify.listen({ port: 3001 });
        console.log(`Server listening on port 3001`);
    } catch (error) {
        console.log(error);
    }
};

start();
