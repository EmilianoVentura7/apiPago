import { Paymenst } from "../entities/payments";

export interface PaymenstMqtt {
    sendPayments(payments: Paymenst): Promise<any>
}