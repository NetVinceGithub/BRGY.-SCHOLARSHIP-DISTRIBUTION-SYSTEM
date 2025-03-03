import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import sequelize from "./db/db.js"; // Sequelize connection




sequelize.sync({ alter: false }) 
  .then(() => console.log("MySQL Database Synced"))
  .catch((err) => console.error("MySQL Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
