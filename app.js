const express = require('express');
const app = express();
//const errorx = require('./error');

let erroHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json(err);
};

app.get('/', (req, res) => {
    //var d = errorx.division();
    res.status(200).json({ok:true});
});

app.use(erroHandler);

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});