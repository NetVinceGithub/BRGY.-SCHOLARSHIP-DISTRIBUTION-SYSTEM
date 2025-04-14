import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (!['capitol', 'barangay'].includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role value. Allowed values: 'capitol' or 'barangay'" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword, role });

    res.status(201).json({ success: true, message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.status(200).json({ success: true, message: "Users found", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Users not found" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.role = role;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.status(200).json({ success: true, message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if(!user) {
      return res.status(404).json({success: false, message: "User not found"});
    }

    await user.destroy();
    res.status(200).json({success: true, message: "Successfully deleted user"});
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: "Error deleting user"});
  }
};