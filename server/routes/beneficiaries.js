import express from 'express';
import { addBeneficiary, getBeneficiaries, updateBeneficiary, deleteBeneficiary } from '../controllers/beneficiariesController.js';
import { transferAllToCapitol } from '../controllers/capitolController.js';

const router = express.Router();

router.post('/add-beneficiary', addBeneficiary);
router.get('/get-beneficiaries', getBeneficiaries);
router.delete('/delete/:id', deleteBeneficiary);
router.put('/update/:id', updateBeneficiary);
router.post('/transfer-to-capitol', transferAllToCapitol);



export default router;