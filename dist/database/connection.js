"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
});
const query = async (text, params) => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result.rows;
    }
    catch (error) {
        console.log("Erro ao executar consulta: ", error);
        throw error;
    }
    finally {
        client.release();
    }
};
exports.query = query;
//# sourceMappingURL=connection.js.map