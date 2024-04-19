import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();

import authRoutes from './routes/auth';     // Auth
import productoRoutes from './routes/producto';   // Producto
import photoRoutes from './routes/photo';   // Photo

//settings
app.set('port', process.env.PORT || 4000);

//middlewares 
app.use(morgan('dev'));     // Ver peticiones http (morgan)
app.use(cors());            // Conexión con el frontend
app.use(express.json());    // Reconocer datos que recibimos 

//rutas
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/photos',  photoRoutes);

app.use('/uploads', express.static(path.resolve('uploads')))    // carpeta para archivos

export default app;