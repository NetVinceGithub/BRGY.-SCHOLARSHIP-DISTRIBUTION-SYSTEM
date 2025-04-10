import Beneficiaries from '../models/Beneficiaries.js';

export const addBeneficiary = async (req, res) => {
  try{
    const { name, email, gcashNumber, gcashName, school, studentCode} = req.body;

    if(!name, !email, !gcashNumber, !gcashName, !school, !studentCode) {
      return res.status(400).json({success:false, message:"There are missing fields"});
    }

    const existingBeneficiary = await Beneficiaries.findOne({where: {studentCode}});
    if(existingBeneficiary) {
      return res.status(400).json({success: false, message: "Beneficiary existing"});
    }

    const newBeneficiary = await Beneficiaries.create({
      name,
      email,
      gcashNumber,
      gcashName, 
      school,
      studentCode
    });
    

    res.status(201).json({success: true, message: newBeneficiary});

  } catch (error) {
    console.error("Backend Error in addBeneficiary:", error);  // <-- log exact issue
    res.status(500).json({ success: false, message: "Error in addBeneficiary", error });
  }
  
}

export const getBeneficiaries = async (req, res) => {
  try {
    const beneficiaries = await Beneficiaries.findAll();
    res.status(200).json({success: true, message: beneficiaries});
  } catch (error) {
    console.error("error fetching beneficiaries in beneficiariesController");
  }
}
