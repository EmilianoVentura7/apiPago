import { connectToRabbitMQ } from "../../../rabbit/configRabbit";
import { Paymenst } from '../../dominio/entities/payments';
import { PaymenstMqtt } from "../../dominio/services/paymetMqtt";

export class PaymentRepositoryMqtt implements PaymenstMqtt {
     async sendPayments(payments: Paymenst): Promise<boolean> {
        try {
            const channel = await connectToRabbitMQ();
            await channel?.sendToQueue("payments", Buffer.from(JSON.stringify({message: 'venta creada', payments})));
            console.log("Pago enviado a RabbitMQ:", payments);
            await channel?.close();
            return true;
          } catch (error) {
            console.error("Error al enviar pago a RabbitMQ:", error);
            return false;
          }
        }
}