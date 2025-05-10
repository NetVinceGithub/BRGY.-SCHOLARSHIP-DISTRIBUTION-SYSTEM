import { DataTypes } from 'sequelize'
import sequelize from '../db/db.js'

const Beneficiaries = sequelize.define('Beneficiaries', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  school: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false
  }, 
  studentCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gcashNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gcashName: {
    type: DataTypes.STRING, 
    allowNull: false
  }

}, {
  tableName: 'beneficiaries',
  timestamps: true
});

export default Beneficiaries; 