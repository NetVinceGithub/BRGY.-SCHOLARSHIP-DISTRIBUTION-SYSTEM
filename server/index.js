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

sequelize.sync({ alter: true })
  .then(() => console.log("MySQL Database Synced"))
  .catch((err) => console.error("MySQL Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://brgy-scholarship-distribution-system-vfv3.vercel.app', // Replace with correct Vercel URL
      'http://localhost:5173', // For local development
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); 
    } else {
      console.log(`CORS error: Request from origin ${origin} is not allowed.`);
      callback(new Error('Not allowed by CORS')); 
    }
  },
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
