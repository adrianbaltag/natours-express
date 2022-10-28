// express set up
const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1)MIDDLEWARES
//middleware morgan login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
//accessing static files(e.g.: html, css...)
app.use(express.static(`${__dirname}/public}`));
//creating own middleware
app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});
//middleware-show time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);

module.exports = app;
