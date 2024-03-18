/*
Name: Sebastian Duarte
Assignment: Assignment: CSC300x HW 5 Part 2
File Contents:  Script file for Jokebook API
*/
//app.js
"use strict";
const express = require("express");
const app = express();
const fs = require("fs").promises;
const multer = require("multer");
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(multer().none());

let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
{
'joke': 'Why did the student eat his homework?',
'response': 'Because the teacher told him it was a piece of cake!'
},
{
'joke': 'What kind of tree fits in your hand?',
'response': 'A palm tree'
},
{
'joke': 'What is worse than raining cats and dogs?',
'response': 'Hailing taxis'
}
];
let lameJoke = [
{
'joke': 'Which bear is the most condescending?',
'response': 'Pan-DUH'
},
{
'joke': 'What would the Terminator be called in his retirement?',
'response': 'The Exterminator'
}
];

app.get('/jokebook/categories', async (req, res) => {
    res.json(categories);
});

app.get('/jokebook/joke/:category', async (req, res) => {
    const {category} = req.params;
    const limit = req.query.limit;
    let jokes;

    if (category == 'funnyJoke'){
        jokes = funnyJoke;
    } else if (category == 'lameJoke'){
        jokes= lameJoke;
    } else{
        return res.status(400).json({'error': `no category listedfor ${category}`});
    }

    if (limit) {
        jokes = jokes.slice(0, limit);
    }

    res.json(jokes);
});

app.post ('/jokebook/joke/new', (req,res) =>{
    const {category, joke, response} = req.body;

    if (!category || !joke || !response || !categories.includes(category)){
        return res.status(400).json({'error': 'invalid or insufficient user input'});
    }
    let jokes;

    if (category == 'funnyJoke'){
        jokes = funnyJoke; 
        funnyJoke.push({joke,response});
    } else if (category == 'lameJoke'){
        jokes = lameJoke; 
        lameJoke.push({joke, response});
    } else {
        return res.status(400).json({'error': 'invalid or insufficient user input'});
    }

    res.json(jokes);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);