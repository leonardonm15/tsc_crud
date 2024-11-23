import { query } from './database/connection';
import * as uq from './database/queries/user_queries'

export interface User {
    id?: number;
    name: string;
    email: string;
    age: number;
}

export async function createUser(req: {nome: string, email: string, age: number}): Promise<User> { // l1
    try {

        if (!req.nome || !req.email || !req.age) {
            throw new Error("Campos obrigatórios estão ausentes, name, email ou age");
        }

        const sql: string = uq.CREATE_USER;
        const params: [string, string, number] = [req.nome, req.email, req.age];

        const result: User[] = await query(sql, params);

        if (result.length === 0) {
            throw new Error("Nenhum usuário foi criado");
        }

        return result[0];
    } catch (error) {
        throw new Error("Erro ao criar o usuário: " + error);
    }
}
