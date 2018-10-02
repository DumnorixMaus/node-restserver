// =========================================================================
// configuracion del puerto que asigna el servidor, si esta en local se asigna un puerto
// =========================================================================

process.env.PORT = process.env.PORT || 3000;

// =========================================================================
// Entorno
// =========================================================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =========================================================================
// Base de datos
// =========================================================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //'mongodb://cafe-user:123456p_@ds121373.mlab.com:21373/cafe'
    urlDB = process.env.MONGO_URI;

}

process.env.URLDB = urlDB;