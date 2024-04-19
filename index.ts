import express from 'express';
import cors from 'cors';
import paymentRoute from './src/payments/infrestructure/routes/paymentsRouter';


const app = express();

const port = '3000';


let corOptions = {
    origin: '*'
};

app.use(cors(corOptions));
app.use(express.json());

app.use('/', paymentRoute);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port);
})