/*
    Keri Russin
    WDV353
    Let's write an API
    April 15, 2022
*/


const axios = require("axios");


const todoService = () => {
    console.log("Real Todos");
    return axios.get(`${process.env.todosURL}`).then(result => result.data)
}

const todoServiceById = (id) => {
    console.log("Real Todo by Id");
    return axios.get(`${process.env.todosURL}${id}`).then(result => result.data)
}

module.exports = {
    todoService,
    todoServiceById
}