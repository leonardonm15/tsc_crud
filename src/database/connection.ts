import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool ({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
});


export const query = async (text: string, params?: any[]): Promise<any[]> => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result.rows;
    } catch (error) {
        console.log("Erro ao executar consulta: ", error);
        throw error; 
    } finally {
        client.release();
    }
}
