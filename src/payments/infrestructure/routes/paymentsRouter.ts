import express  from 'express';
import { PaymentController } from '../controller/paymentsController';
export const router = express.Router();

router.post('/payment', PaymentController.createPayment);

export default router;