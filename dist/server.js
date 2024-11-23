"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    try {
        res.send("Api básica com express e typescript");
    }
    catch (error) {
        res.status(400).send("deu ruim");
    }
});
app.post('/create/user', async (req, res) => {
    try {
        const new_user = await (0, user_1.createUser)(req.body);
        const new_user_stringfied = JSON.stringify(new_user);
        res.status(201).json({ message: "Usuário Criado com Sucesso", user: new_user_stringfied });
    }
    catch (error) {
        res.send("ERRO NA API " + error);
        res.status(400).json({ error: error });
    }
});
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
//# sourceMappingURL=server.js.map