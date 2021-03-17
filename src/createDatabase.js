var unirest = require("unirest");
const fetch = require("node-fetch");
var fs = require('fs');
// var dataToWrite = [];
// var counter = 0;

// const pulls = 2

// for (let i=1; i < pulls+1; i++) {
//     var req = unirest("GET", "https://unogsng.p.rapidapi.com/search");
//     const offset = JSON.stringify(i*100-100)
//     console.log(offset)
//     req.query({
//         start_year: '1972',
//         orderby: 'rating',
//         audiosubtitle_andor: 'and',
//         start_rating: '7',
//         limit: '100',
//         end_rating: '10',
//         subtitle: 'english',
//         countrylist: '78',
//         country_andorunique: 'unique',
//         offset: offset,
//         end_year: '2021'
//     });

//    // requests are definitely both going out, however, currently only the first one is coming back and being concatted "pull" number of times
    
//     req.headers({
//         "x-rapidapi-key": "5ce2fa4156mshb085f498a38e5a0p126d5fjsna55d380ca794",
//         "x-rapidapi-host": "unogsng.p.rapidapi.com",
//         "useQueryString": true
//     });
    
//     req.end(function (res) {
//         if (res.error) throw new Error(res.error);
//         const data = res.body;

//         console.log(data)
    
//         dataToWrite = dataToWrite.concat(data['results']);
//         counter = counter + 1
//         console.log(counter)
    
//         if (counter === pulls) {
//             console.log('writing',counter)
//             fs.writeFileSync('./database.json',JSON.stringify(dataToWrite), function(err, result) {
//                 console.log(result, err)
//                 if(err) throw new Error(result.error);
//             })
//         }
        
//     });
    
// }

// when request is received


var fetchPromise = fetch("https://unogsng.p.rapidapi.com/search?start_year=1972&orderby=rating&audiosubtitle_andor=and&limit=100&subtitle=english&countrylist=78%2C46&audio=english&country_andorunique=unique&offset=0&end_year=2019", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "unogsng.p.rapidapi.com"
	}
}).catch(err => {
	console.error(err);
});

var jsonPromise = fetchPromise.then(response => {
	return response.json();
}).catch(err => {
	console.error(err);
});

jsonPromise.then(json => console.log(json)).catch(err => {
	console.error(err);
});

console.log('end!')

/*
 var response = await fetch(...);
 var json = await response.json();
 console.log(json)
 console.log('end!')
 */



