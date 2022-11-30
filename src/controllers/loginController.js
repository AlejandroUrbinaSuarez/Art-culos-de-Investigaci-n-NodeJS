const controller = {};

controller.mostrar =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('', (err, rows) =>{
                //console.log(rows);
                res.render('index', {
                })
        })
    })
};

module.exports = controller;