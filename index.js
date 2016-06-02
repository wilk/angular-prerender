const express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    hbs = exphbs.create({extname: '.hbs'});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './public/views');
app.use(express.static('.'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/api/expenses', (req, res, next) => {
    res.json([{
        id: 0,
        value: 10,
        description: 'an expense'
    }, {
        id: 1,
        value: 20,
        description: 'an expense #2'
    }, {
        id: 2,
        value: 30,
        description: 'an expense #3'
    }, {
        id: 3,
        value: 40,
        description: 'an expense #4'
    }]);
});

app.get('/expenses', (req, res, next) => {
    res.render('expenses', {
        expenses: [{
            id: 0,
            value: 10,
            description: 'an expense'
        }, {
            id: 1,
            value: 20,
            description: 'an expense #2'
        }, {
            id: 2,
            value: 30,
            description: 'an expense #3'
        }, {
            id: 3,
            value: 40,
            description: 'an expense #4'
        }]
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});