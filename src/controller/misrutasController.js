const getIndex = (req, res) => {
    res.render('index');
};

const getSign = (req, res) => {
    res.render('sign');
};
const getLogin = (req, res) => {
    res.render('login');
};



// Exporta las funciones y el enrutador
module.exports = {
    getIndex,
    getSign,
    getLogin

};