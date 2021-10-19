const express = require('express');

const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    const { name } = req.body;

    res
      .cookie('name', name, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .render('cookie-set', { name });
  })
  .get('/show', (req, res) => {
    const { name } = req.cookies;
    res.send(`<!DOCTYPE html>
    <html>
    <body>
  <div>
  <img style="width:150px" src="/se2.png"
  </div>
    
    <h2>${name ?? 'Nothing was saved yet'}</h2>
    </body>
    </html>
    
    `);
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(name === undefined ? 'Nothing was saved' : 'Information is saved');
  });

module.exports = {
  cookieRouter,
};
