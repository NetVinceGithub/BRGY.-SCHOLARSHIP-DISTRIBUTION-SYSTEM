import Barangay from "../models/Barangay.js"

export const addBarangay = async (req, res) => {
  try {
    const {name, gmail, password} = req.body;

    if (!name, !gmail, !password) {
      return res.status(400).json({success: false, message: "There are missing fields"})
    }

    const existingBarangay = await Barangay.findOne({where: {gmail}});
    if(existingBarangay) {
      return res.status(400).json({success: false, message: "Gmail already existing"});
    }

    const newBarangay = await Barangay.create({
      name, 
      gmail,
      password
    });

  res.status(201).json({success:true, message:newBarangay});

  } catch (error) {
    res.status(500).json({success: false, message: "error in barangayController", error:error.message});
  }
}