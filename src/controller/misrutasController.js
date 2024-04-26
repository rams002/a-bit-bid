const getIndex = (req, res) => {
    res.render('index');
};

const getSign = (req, res) => {
    res.render('sign');
};


// Exporta las funciones y el enrutador
module.exports = {
    getIndex,
    getSign
};