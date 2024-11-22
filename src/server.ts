import express, { Request, Response } from 'express';
import { User, createUser } from './user';

const app = express();
app.use(express.json());

app.post('/create/user', async (req: Request, res: Response) => { // l0
    try {
        const new_user: User = await createUser(req.body);
        const new_user_stringfied: string = JSON.stringify(new_user);
        res.status(201).json({message: "Usuário Criado com Sucesso", user: new_user_stringfied});
    } catch (error) {
        res.status(400).json({error: error});
    }
});


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
