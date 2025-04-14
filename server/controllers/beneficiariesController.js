import Beneficiaries from '../models/Beneficiaries.js';

export const addBeneficiary = async (req, res) => {
  try {
    const {
      name,
      email,
      gcashNumber,
      gcashName,
      school,
      studentCode,
      userId // 👈 this comes from the frontend
    } = req.body;

    if (!name || !email || !gcashNumber || !gcashName || !school || !studentCode || !userId) {
      return res.status(400).json({ success: false, message: "There are missing fields" });
    }

    const existingBeneficiary = await Beneficiaries.findOne({
      where: { studentCode, userId }
    });

    if (existingBeneficiary) {
      return res.status(400).json({ success: false, message: "Beneficiary existing" });
    }

    const newBeneficiary = await Beneficiaries.create({
      name,
      email,
      gcashNumber,
      gcashName,
      school,
      studentCode,
      userId
    });

    res.status(201).json({ success: true, message: newBeneficiary });

  } catch (error) {
    console.error("Backend Error in addBeneficiary:", error);
    res.status(500).json({ success: false, message: "Error in addBeneficiary", error: error.message });
  }
};


export const getBeneficiaries = async (req, res) => {
  try {
    const { userId } = req.query; 
    if (!userId) {
      return res.status(400).json({ success: false, message: 'Missing userId in request' });
    }

    const beneficiaries = await Beneficiaries.findAll({ where: { userId } });

    res.status(200).json({ success: true, message: beneficiaries });
  } catch (error) {
    console.error("Error fetching beneficiaries:", error);
    res.status(500).json({ success: false, message: "Error fetching beneficiaries", error: error.message });
  }
};

export const deleteBeneficiary = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ success: false, message: 'Missing beneficiary ID' });
    }
    
    const beneficiary = await Beneficiaries.findOne({ where: { id, userId: req.user.id } });


    if (!beneficiary) {
      return res.status(404).json({ success: false, message: 'Beneficiary not found' });
    }

    await beneficiary.destroy();
    res.status(200).json({ success: true, message: 'Beneficiary deleted successfully' });

  } catch (error) {
    console.error('Backend Error in deleteBeneficiary:', error);
    res.status(500).json({ success: false, message: 'Error deleting beneficiary', error: error.message });
  }
};

export const updateBeneficiary = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: 'Missing beneficiary ID' });
    }

    const {
      name,
      email,
      gcashNumber,
      gcashName,
      school,
      studentCode
    } = req.body;

    // Find by ID only (no user check)
    const beneficiary = await Beneficiaries.findByPk(id);

    if (!beneficiary) {
      return res.status(404).json({ success: false, message: 'Beneficiary not found' });
    }

    await beneficiary.update({
      name,
      email,
      gcashNumber,
      gcashName,
      school,
      studentCode
    });

    res.status(200).json({ 
      success: true, 
      message: 'Beneficiary updated successfully',
      data: beneficiary
    });

  } catch (error) {
    console.error('Backend Error in updateBeneficiary:', error);
    res.status(500).json({ success: false, message: 'Error updating beneficiary', error: error.message });
  }
};

