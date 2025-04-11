import express from 'express';
import { addBeneficiary, getBeneficiaries, updateBeneficiary, deleteBeneficiary } from '../controllers/beneficiariesController.js';

const router = express.Router();

router.post('/add-beneficiary', addBeneficiary);
router.get('/get-beneficiaries', getBeneficiaries);
router.delete('/delete/:id', deleteBeneficiary);
router.put('/update/:id', updateBeneficiary);

router.get('/test-update/:id', (req, res) => {
  res.status(200).json({ message: 'Update endpoint is reachable', id: req.params.id });
});

export default router;