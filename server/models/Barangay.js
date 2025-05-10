import { DataTypes} from "sequelize";
import sequelize from "../db/db.js";

const Barangay = sequelize.define('Barangay', {
  id: {
    type:DataTypes.INTEGER, 
    autoIncrement:true, 
    primaryKey: true
  }, 
  name: {
    type: DataTypes.STRING, 
    allowNull: false
  }, 
  gmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING, 
    allowNull: false
  }
}, {
  tableName: 'barangay',
  timestamps:true
});

export default Barangay;