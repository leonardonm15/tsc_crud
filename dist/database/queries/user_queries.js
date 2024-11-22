"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.UPDATE_USER = exports.GET_USER_BY_ID = exports.GET_USERS = exports.CREATE_USER = void 0;
exports.CREATE_USER = "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *";
exports.GET_USERS = "SELECT * FROM users";
exports.GET_USER_BY_ID = "SELECT * FROM users WHERE id = $1";
exports.UPDATE_USER = `
    UPDATE
        users
    SET
        name = $1,
        email = $2,
        age = $3
    WHERE 
        id = $4 
    RETURNING *
`;
exports.DELETE_USER = "DELETE FROM users WHERE id = $1";
//# sourceMappingURL=user_queries.js.map