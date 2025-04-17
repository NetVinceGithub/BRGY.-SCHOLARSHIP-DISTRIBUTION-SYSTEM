import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Schedule = sequelize.define("Schedule", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  barangay: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deadline: {
    type: DataTypes.DATEONLY, 
    allowNull: false
  }
}, {
  tableName: "schedule",
  timestamps: true
});

export default Schedule;
