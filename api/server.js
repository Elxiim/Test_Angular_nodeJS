const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRoutes = require('./router/user');
const cors = require('cors');

//Routes
app.use('/api/users', usersRoutes);
app.use(cors({ origin: true, credentials: true }));

//CORS MIDDLEWARE
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',

//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

//Connect to database
mongoose
  .connect('mongodb://localhost/Exercice')
  .then(() => {
    console.log('database connected...');
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = '4641';

app.listen(PORT, () => {
  console.log(`App is runnning on port ${PORT}`);
});
