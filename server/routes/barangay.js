import express from 'express'
import { addBarangay } from '../controllers/barangayController.js';

const router = express.Router();

router.post('/add-barangay', addBarangay);

export default router;