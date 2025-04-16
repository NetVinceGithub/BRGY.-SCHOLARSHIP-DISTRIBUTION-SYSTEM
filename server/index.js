import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import beneficiaryRouter from './routes/beneficiaries.js';
import barangayRouter from './routes/barangay.js';
import capitolRouter from './routes/capitol.js';
import sequelize from "./db/db.js";

dotenv.config(); 

sequelize.sync({ alter: true }) // Modify the schema as needed
  .then(() => console.log("MySQL Database Synced"))
  .catch((err) => console.error("MySQL Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://brgy-scholarship-distribution-system-ojc8qz51a.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/beneficiaries", beneficiaryRouter);
app.use('/api/barangay', barangayRouter);
app.use('/api/capitol', capitolRouter);

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
