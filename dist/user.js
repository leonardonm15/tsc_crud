"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const connection_1 = require("./database/connection");
const uq = __importStar(require("./database/queries/user_queries"));
async function createUser(req) {
    try {
        const { name, email, age } = req;
        if (!name || !email || !age) {
            throw new Error("Campos obrigatórios estão ausentes, name, email ou age");
        }
        const sql = uq.CREATE_USER;
        const params = [name, email, age];
        const result = await (0, connection_1.query)(sql, params);
        if (result.length === 0) {
            throw new Error("Nenhum usuário foi criado");
        }
        return result[0];
    }
    catch (error) {
        throw new Error("Erro ao criar o usuário: " + error);
    }
}
//# sourceMappingURL=user.js.map