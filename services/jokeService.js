/*
    Keri Russin
    WDV353
    Let's write an API
    April 15, 2022
*/

const axios = require("axios");

const jokeService = () => {
    console.log("Real Joke Created");
    return axios.get(`${process.env.jokesURL}`).then(result => {
        return result.data
    })
}

const jokeServiceById = (id) => {
    console.log("Real Joke By Id");
    return axios.get(`${process.env.jokesURL}?idRange=${id}`).then(result => {
        return result.data
    })
}

module.exports = {
    jokeService,
    jokeServiceById
}