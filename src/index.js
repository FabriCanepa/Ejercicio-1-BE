import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

import taskRouter from './routes/taskRoutes.js'

// 1. Iniciar APP
const app = express();

// 2. Configuraciones generales
const PORT = process.env.PORT || 5000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(cors());

//  *TODO RUTAS
app.use(taskRouter)

// 5. Iniciar el Loop del servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
  