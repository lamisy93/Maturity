
router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into reponse(wording,action) values(''+req.body.wording+'',''+req.body.action+'')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/reponse', function(req, res, next) {
    res.locals.connection.query('select * from reponse', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});