const bcrypt = require('bcryptjs');
const connection = require('../conexion');



const getIndex = (req, res) => {
    res.render('index');
};
const getSign = (req, res) => {
    res.render('sign', { mensaje: '' });
};
const getLogin = (req, res) => {
    res.render('login',  { mensaje: '' });
};

const postSign = async (req, res) => {
    //const url = req.body;
    const {Username, Password} = req.body;
    // Encriptar la contraseña
    
    const hashedPassword = await bcrypt.hash(Password, 10);
    const insertQuery ='INSERT INTO Users(Username, Password) VALUES (?, ?)';
    const values = [Username, hashedPassword ];
    // Ejecutar la consulta INSERT
    connection.query(insertQuery, values, function(error, results, fields) {
    if (error) {
        res.redirect('/sign', {mensaje: 'Error al registrarte'});
        return;
    }
    //console.log('Usuario insertado correctamente');
    res.redirect('/',{ mensaje: 'Usuario registrado' });
    });
};

const postLogin =(req, res) => {
    const Username = req.body.username;
    const Password = req.body.Password;
    const query = 'SELECT * FROM Users WHERE Username = ?';
   
    connection.query(query, Username, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            // Verificar si la contraseña coincide utilizando bcrypt.compare()
            const validPassword = bcrypt.compare(Password, results[0].Password);
                if (validPassword) {
                    req.session.loggedIn = true; // Establece la sesión como iniciada
                    req.session.username = Username; // Guarda el nombre de usuario en la sesión
                    res.redirect('/'); // Redirige al usuario al home 
                } else {
                    res.render('login', { mensaje: 'Contraseña inválida' });
                }
   
        } else {
            res.render('index', { mensaje: 'Usuario no valido' }); // Redirige al usuario de vuelta al formulario de inicio de sesión con un mensaje de error
        }
    
    });
};



// Exporta las funciones y el enrutador
module.exports = {
    getIndex,
    getSign,
    getLogin,
    postSign,
    postLogin

};