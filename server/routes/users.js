import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/add-user", addUser); 
router.get('/get-users', getUsers);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser); 

export default router;