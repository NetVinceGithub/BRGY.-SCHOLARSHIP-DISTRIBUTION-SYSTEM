import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { URL } from "url"; // This helps parse the DATABASE_URL

dotenv.config();

// Parsing DATABASE_URL into components
const parsedUrl = new URL(process.env.DATABASE_URL);

// Create Sequelize instance using parsed components
const sequelize = new Sequelize(
  parsedUrl.pathname.slice(1), // DB_NAME (database is after the first `/`)
  parsedUrl.username,          // DB_USER (username is in the URL)
  parsedUrl.password,          // DB_PASS (password is in the URL)
  {
    host: parsedUrl.hostname,  // DB_HOST (hostname is in the URL)
    port: parsedUrl.port,      // DB_PORT (port is in the URL)
    dialect: "mysql",          // DB_DIALECT is "mysql"
    logging: false,            // Disable Sequelize logging (you can set to `console.log` if needed)
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Database Connected");
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};

// Ensure database exists (check/create)
sequelize
  .query(`CREATE DATABASE IF NOT EXISTS ${parsedUrl.pathname.slice(1)};`)
  .then(() => {
    console.log("Database checked/created successfully.");
  })
  .catch((err) => console.error("Error creating database:", err));

export { sequelize, connectToDatabase };
