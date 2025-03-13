import 'reflect-metadata';
import { Email } from '../entities/emails/emails.entity';
import { DataSource } from 'typeorm';
import { DatabaseConfig } from '../types';
const dotenv = require('dotenv');

dotenv.config();

const config: DatabaseConfig = {
    DATABASE_HOST: process.env.DATABASE_HOST || '',
    DATABASE_PORT: process.env.DATABASE_PORT || '5438',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || '',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE_NAME: process.env.DATABASE_NAME || '',
};

if (!config.DATABASE_HOST || !config.DATABASE_USERNAME || !config.DATABASE_PASSWORD || !config.DATABASE_NAME) {
    throw new Error('Missing required database environment variables');
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.DATABASE_HOST,
    port: parseInt(config.DATABASE_PORT, 10),
    username: config.DATABASE_USERNAME,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
    entities: [Email],
    synchronize: true,
});

export const connectDB = async (): Promise<void> => {
    try {
        await AppDataSource.initialize();
        console.log('Db connected');
    } catch (error: any) {
        console.error('Db error', error.message, error.stack);
    }
};
