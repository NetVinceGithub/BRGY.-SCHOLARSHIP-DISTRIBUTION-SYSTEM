import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import beneficiaryRouter from './routes/beneficiaries.js';
import sequelize from "./db/db.js"; // Sequelize connection

dotenv.config(); // Load environment variables

sequelize.sync({ alter: false }) 
  .then(() => console.log("MySQL Database Synced"))
  .catch((err) => console.error("MySQL Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/beneficiaries", beneficiaryRouter);

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is working' });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});