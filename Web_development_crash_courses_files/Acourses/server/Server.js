const express = require('express');

//import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet'; // adds security to the headers
import morgan from 'morgan'; // log server events

dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(isAuthenticated);
const port = process.env.PORT;
process.
app.get('/recipe', (req, res) => {
	res.send('Pancakes');
});


app.get('/user', (req, res) => {
	res.send('User');
});


function isAuthenticated(req, res, next){
	console.log(req.query.admin);
	next();
}



app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
