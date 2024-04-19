import { query } from '../../../db/db';
import { Paymenst } from '../../dominio/entities/payments';
import { PaymentService } from '../../dominio/services/paymetService';


export class PaymentRepository implements PaymentService {

    createPayment = async (payments: Paymenst): Promise<any> => {
         const sql = 'INSERT INTO payments (nombre, apellido, total) VALUES (?, ?, ?)';
         const params = [payments.nombre, payments.apellido, payments.total];

         try {
            const res = await query(sql, params);
            return res;
         } catch ( error ){
            console.log('Hubo un error al crear el payments', error);
         }
    } 
}