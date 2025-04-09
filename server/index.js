import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import beneficiaryRouter from './routes/beneficiaries.js';
import sequelize from "./db/db.js"; // Sequelize connection

dotenv.config(); // Load environment variables

// Sync Database
sequelize.sync({ alter: false }) 
  .then(() => console.log("MySQL Database Synced"))
  .catch((err) => console.error("MySQL Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/beneficiaries", beneficiaryRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
