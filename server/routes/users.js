import express from "express";
import { addUser, getUsers } from "../controllers/usersController.js";


const router = express.Router();

router.post("/add", addUser); 
router.get('/get-users', getUsers);

export default router;
