
"use strict";


function gitHubAPI(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': githubAPI}})
        .then((response) =>{return response.json()})
        .then(results => console.log(results[0]))
        .catch(error => console.error(error));
}
    console.log(gitHubAPI("Darius-Brown"));



