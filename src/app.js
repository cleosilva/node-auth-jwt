require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

// Config JSON response
app.use(express.json());

app.use('/', userRouter)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wfxolhf.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000)
        console.log('Conectou com o banco!')
})
.catch((err) => console.log(err));
