const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const { authRouter, verifyToken } = require('./routes/auth/auth');
// const db = require("./postgres/config.js");

require('dotenv').config();

// routes
const accountsRouter = require('./routes/users/auth');
const songRouter = require('./routes/users/songs');
const friendRequestsRouter = require('./routes/users/friendrequests');
const profileRouter = require('./routes/users/profile');

const app = express();
const port = 3001;

const reactAppHost = process.env.REACT_APP_HOST;
const reactAppPort = process.env.REACT_APP_PORT;

// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
app.use(cors({
  credentials: true,
  origin: `${reactAppHost}:${reactAppPort}`,
}));

app.use('/auth', accountsRouter);
app.use('/songs', songRouter);
app.use('/friends/requests', friendRequestsRouter);
app.use('/profile', profileRouter);

app.listen(port, () => {
  console.log(`App listening at ${reactAppHost}:${port}/`);
});
