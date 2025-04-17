import express from 'express'
import { getScholars, releaseScholarship, getHistory, addSchedule, getSchedules } from '../controllers/capitolController.js';

const router = express.Router();

router.get('/get-scholars', getScholars);
router.post('/release-scholarship', releaseScholarship);
router.get('/get-history', getHistory);
router.post('/add-schedule', addSchedule);
router.get('/get-schedules', getSchedules);

export default router;