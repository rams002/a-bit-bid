const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
//importamos las rutas
const misRutas = require('./routes/misRutas');
//const imageRoutes = require('./routes/image');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', // Cambia esta cadena secreta
    resave: false,
    saveUninitialized: true
}));

// Configuración para servir archivos estáticos
app.use(express.static(__dirname));
//plantillas
app.set('view engine', 'ejs');
app.set('views', './src/view');

// Routes
app.use('/', misRutas);
app.use('/sign', misRutas);
app.use('/login', misRutas);



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});