export const CREATE_USER: string = "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *";

export const GET_USERS: string = "SELECT * FROM users";

export const GET_USER_BY_ID: string = "SELECT * FROM users WHERE id = $1";

export const UPDATE_USER: string = `
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

export const DELETE_USER: string = "DELETE FROM users WHERE id = $1";
