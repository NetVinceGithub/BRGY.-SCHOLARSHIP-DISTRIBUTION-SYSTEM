import express from 'express'
import { addBeneficiary, getBeneficiaries } from '../controllers/beneficiariesController.js'

const router = express.Router();

router.post ('/add-beneficiary', addBeneficiary);
router.get('/get-beneficiaries', getBeneficiaries);

export default router; 