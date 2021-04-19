"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

    let min3 = users.filter(function (user){
        if (user.languages.length >= 3) {
            return user;
        }
    })
console.log(min3);



    let emails = users.map(function (user){
        return user.email;
    })
console.log(emails);



let yearsSum = users.reduce(function(total, user){
    return user.yearsOfExperience + total;
},0)

let average = yearsSum / users.length;
console.log(average);



let longestEmail = users.reduce(function (longestEmail, user){
   if (user.email.length > longestEmail.length) {
       longestEmail = user.email;
   }    return longestEmail;
}," ")
console.log(longestEmail);





    let nameList = users.reduce(function(string,user){
            //console.log(user.name);
        string = (user.name + ", ") + string;
            //console.log(string);
        return string;
}," ");

console.log(nameList);



// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
