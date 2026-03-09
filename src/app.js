import express from 'express';
import pqrsRoutes from './routes/pqrsRoutes.js';

const app = express()
const port = 3000

app.use(express.urlencoded());
app.use('/api', pqrsRoutes);

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto :${port}`);
})