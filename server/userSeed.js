import { sequelize, connectToDatabase } from './db/db.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

const userRegister = async () => {
  await connectToDatabase();

  try {
    const hashPassword1 = await bcrypt.hash("capitol", 10);
    await User.create({
      name: "Capitol",
      email: "capitol@gmail.com",
      password: hashPassword1,
      role: "capitol",
    });
    console.log("Capitol user created successfully.");

    const hashPassword2 = await bcrypt.hash("barangay", 10);
    await User.create({
      name: "Barangay",
      email: "barangay@gmail.com",
      password: hashPassword2,
      role: "barangay",
    });
    console.log("Barangay user created successfully.");
  } catch (error) {
    console.error("Error inserting users:", error);
  } finally {
    await sequelize.close(); 
  }
};

userRegister();
