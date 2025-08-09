import dotenv from "dotenv";
dotenv.config();
export const serverConfig = {
    PORT: process.env.PORT || 3000,
    token_key: process.env.mySecretTokenKey
};