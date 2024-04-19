import { Paymenst } from "../entities/payments";

export interface PaymentService {
    createPayment(paymentData: Paymenst): Promise<Paymenst>;
}