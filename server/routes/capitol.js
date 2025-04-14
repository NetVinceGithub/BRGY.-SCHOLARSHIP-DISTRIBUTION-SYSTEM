import express from 'express'
import { getScholars, releaseScholarship } from '../controllers/capitolController.js';

const router = express.Router();

router.get('/get-scholars', getScholars);
router.post('/release-scholarship', releaseScholarship);

export default router;