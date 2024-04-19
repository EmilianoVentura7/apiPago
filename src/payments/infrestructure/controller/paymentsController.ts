import { Request, Response } from "express";
import { Paymenst } from "../../dominio/entities/payments";
import { PaymentServiceImpl } from "../../application/useCases/payments";
import { PaymentRepository } from "../repositoryMysql/mysql";
import { PaymentRepositoryMqtt } from "../../application/services/rabbit";

const paymentRepository = new PaymentRepositoryMqtt();
const mysqlRepo = new PaymentRepository();
const paymenService = new PaymentServiceImpl(mysqlRepo);


export class PaymentController {

    static async createPayment(req: Request, res: Response): Promise<void>{
      const payments: Paymenst = req.body;

      await paymenService.createPayment(payments)
      await paymentRepository.sendPayments(payments)

      .then(() => {
        res.status(201).json({
            message: 'La venta fue creada exitosamente',
            venta: payments
        });
    })
    .catch((error) => {
        console.error('Hubo un error al crear la venta:', error);
        res.status(500).json({
            error: 'Hubo un error al crear la venta'
        });
    });
        
    }
}