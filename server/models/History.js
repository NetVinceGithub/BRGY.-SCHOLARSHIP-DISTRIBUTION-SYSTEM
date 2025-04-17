import { DataTypes} from "sequelize";
import sequelize from "../db/db.js";

const History = sequelize.define('History', {
  name: DataTypes.STRING, 
  email: DataTypes.STRING,
  school: DataTypes.STRING, 
  studentCode: DataTypes.STRING, 
  gcashNumber: DataTypes.STRING, 
  gcashName: DataTypes.STRING, 
  userId: DataTypes.INTEGER
}, {
  tableName: 'history'
});

export default History;