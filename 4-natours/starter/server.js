const dotenv = require('dotenv');
const app = require('./app');
//read var from file and save them in node js enviorment var
dotenv.config({path:'./config.env'})
//check enviorment
console.log(app.get('env'))
// console.log(process.env)

//4)START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port${port}...`);
});


