import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { URL } from "url";

dotenv.config();

// Parsing DATABASE_URL
const parsedUrl = new URL(process.env.DATABASE_URL);

const sequelize = new Sequelize(
  parsedUrl.pathname.slice(1),
  parsedUrl.username,
  parsedUrl.password,
  {
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    dialect: "mysql",
    logging: false,
  }
);

// ✅ Add this function
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Database Connected");
  } catch (error) {
    console.error("Database Connection Failed:", error);
    process.exit(1);
  }
};

// ✅ Export both default and named
export default sequelize;
export { sequelize, connectToDatabase };
