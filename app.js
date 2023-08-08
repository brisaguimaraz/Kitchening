const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

/* config */
app.use(express.static(path.join(__dirname, 'public')))

/* rutas */
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/detalle-producto',(req,res) => res.sendFile(path.join(__dirname,'views','detalleProducto.html')));

app.listen(PORT, console.log('Server running in http://localhost:' + PORT));