const fetch = require("node-fetch");
const url = require("./assets/data/data.json")

fetch(url)
    .then(response => {
        console.log(response.json())
    })
    .catch(error => {
        console.log(error)
    });

