"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const auth_1 = __importDefault(require("./routes/auth")); // Auth
const producto_1 = __importDefault(require("./routes/producto")); // Producto
const photo_1 = __importDefault(require("./routes/photo")); // Photo
//settings
app.set('port', process.env.PORT || 4000);
//middlewares 
app.use(morgan_1.default('dev')); // Ver peticiones http (morgan)
app.use(cors_1.default()); // Conexión con el frontend
app.use(express_1.default.json()); // Reconocer datos que recibimos 
//rutas
app.use('/api/auth', auth_1.default);
app.use('/api/productos', producto_1.default);
app.use('/api/photos', photo_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads'))); // carpeta para archivos
exports.default = app;
