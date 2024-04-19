import { Paymenst } from "../../dominio/entities/payments";
import { PaymentService } from "../../dominio/services/paymetService";

export class PaymentServiceImpl implements PaymentService {
    constructor(private paymentRepository: PaymentService) {}

    async createPayment(paymentData: Paymenst): Promise<Paymenst> {
        const createdPayment = await this.paymentRepository.createPayment(paymentData);
        return createdPayment;
    }
}

