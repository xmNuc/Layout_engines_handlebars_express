const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const { cookieRouter } = require('./routes/cookie');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.engine('.hbs', hbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/cookie', cookieRouter);
app.get('/hi', (req, res) => {
  res.render('home', {
    test1: 'Test',
    info: {
      info1: 'abc',
      info2: 'def',
    },
    person: {
      name: 'Son',
      surname: 'of Storm',
    },
    dates: [1990, 1992, 1994, 1994],
  });
});

app.listen(3000, 'localhost');
