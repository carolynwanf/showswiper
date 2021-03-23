const fetch = require("node-fetch");
const axios = require('axios');
const fs = require('fs')

// pulling apikeys
const {netflix, omdb} = require('./apikeys')



// pull data from api
// var dataToWrite = []
// const pulls = 3

// async function ugh() {
//     for (let i=1; i < pulls+1;i++) {

//         const offset = JSON.stringify(i * 100-100)

//         // execution pauses here until data is retrieved
//         const options = {
//             method: 'GET',
//             url: 'https://unogsng.p.rapidapi.com/search',
//             params: {
//               start_year: '1972',
//               orderby: 'rating',
//               audiosubtitle_andor: 'and',
//               start_rating: '7',
//               limit: '100',
//               end_rating: '10',
//               subtitle: 'english',
//               countrylist: '78',
//               country_andorunique: 'unique',
//               offset: offset,
//               end_year: '2021'
//             },
//             headers: {
//               'x-rapidapi-key': netflix,
//               'x-rapidapi-host': 'unogsng.p.rapidapi.com'
//             }
//           };
          
//           await axios.request(options).then(function (response) {
//               dataToWrite = dataToWrite.concat(response.data["results"])
//               console.log(dataToWrite)
//           }).catch(function (error) {
//               console.error(error);
//           });
//     }

//     fs.writeFileSync('./test.json',JSON.stringify(dataToWrite), function(err, result) {
//         console.log(result, err)
//         if(err) throw new Error(result.error);
//     })
// }

// ugh()

// deletes uneccesary catefories (doesn't write back yet)
// const database =  JSON.parse(fs.readFileSync('./databasePromises.json', 
// {encoding:'utf8', flag:'r'}))

// properties = ['top250','top250tv','clist','avgrating','titledate','runtime','img','year','id']

// for (let i=0; i<database.length;i++) {
//     for (let property of properties) {
//         delete database[i][property]
//     }
// }

// fs.writeFileSync('./databasePromises.json',JSON.stringify(database), function(err, result) {
//     console.log(result, err)
//     if(err) throw new Error(result.error);
// })


// console.log(database)

// querys IMDB api for genres

// const database =  JSON.parse(fs.readFileSync('./databasePromises.json', {encoding:'utf8', flag:'r'}))

// for (let i=0; i<database.length;i++) {
//     const imdbid = database[i]['imdbid']

//     fetch('http://www.omdbapi.com/?i='+imdbid+'&apikey='+'omdb', {
//     method:'get'
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(json => {
//         database[i]['genre'] = json['Genre']
//         console.log(database[i])
//         fs.writeFileSync('./databasePromises.json',JSON.stringify(database), function(err, result) {
//             console.log(result, err)
//             if(err) throw new Error(result.error);
//         })
//     }).catch(err => {
//         console.error(err);
//     });


// }



// fetch('http://www.omdbapi.com/?i=tt3896198&apikey='+'omdb', {
//     method:'get'
// })
// .then(response => {
// 	return response.json();
// })
// .then(json => console.log(typeof json)).catch(err => {
// 	console.error(err);
// });














