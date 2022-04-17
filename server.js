/*
    Keri Russin
    WDV353
    Let's write an API
    April 15, 2022
*/


const express = require("express");
require("dotenv").config();

const {
    todoService,
    todoServiceById,
    jokeService,
    jokeServiceById
} = require("./services/todoService");

const app = express();

// for localhost:3000/
app.get("/", (req, res,  next) => {
    res.status(200).send("Service is Up!")
});


// get external service
// http://localhost:3000/todo
app.get("/todo", (req, res, next) => {
    todoService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status
        }
    }))
});

// * * first GET created for joke
// get random user external service
// http://localhost:3000/joke
app.get("/joke", (req, res, next) => {
    jokeService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status
        }
    }))
});

// get external service by ID
// https://localhost:3000/todo/56
app.get("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    todoServiceById(todoId)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(err.status || 501).json({
        error:{
            message: err.message,
            status: err.status,
            method: req.method
        }
    }))
});

// * * second GET created for jokeServiceById
// get random user external by ID
// https://localhost:3000/joke/12
app.get("/joke/:jokeId", (req, res, next) => {
    const jokeId = req.params.jokeId;
    jokeServiceById(jokeId)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(err.status || 501).json({
        error:{
            message: err.message,
            status: err.status,
            method: req.method
        }
    }))
});

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: res.method
        }
    })
});


app.listen(process.env.port, () => {
    console.log(`Server starting on port ${process.env.port}`);
})