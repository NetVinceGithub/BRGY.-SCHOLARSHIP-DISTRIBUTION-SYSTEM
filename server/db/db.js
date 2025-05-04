// db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { URL } from "url";

dotenv.config();

// Parsing DATABASE_URL
const parsedUrl = new URL(process.env.DATABASE_URL);

const sequelize = new Sequelize(
  parsedUrl.pathname.slice(1), // DB_NAME
  parsedUrl.username,          // DB_USER
  parsedUrl.password,          // DB_PASS
  {
    host: parsedUrl.hostname,  // DB_HOST
    port: parsedUrl.port,      // DB_PORT
    dialect: "mysql",          // DB_DIALECT
    logging: false,
  }
);

export { sequelize };  // Named export
