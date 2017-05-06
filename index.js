var express = require('express'),
    app = express(),
    errorx = require('./error');

var erroHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json(err);
};

app.get('/', (req, res) => {
    var d = errorx.division();
    res.status(200).json(d);
});

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});

app.use(erroHandler);

