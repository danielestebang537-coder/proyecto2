import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || 'mongodb+srv://etitcmongodb:qaz123*@cluster0.24yhi29.mongodb.net/',
    mongoDbName: process.env.MONGO_DB_NAME || 'test'
}