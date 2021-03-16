var unirest = require("unirest");
var fs = require('fs');
var req = unirest("GET", "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi");
var dataToWrite = [];
var counter = 0;



for (let i=1; i < 6; i++) {

    req.query({
        "q": "get:new[25550]-!1950,2021-!0,5-!8,10-!0-!Any-!Any-!Any-!gt100-!{downloadable}",
        "t": "ns",
        "cl": "all",
        "st": "adv",
        "ob": "Title",
        "p": JSON.stringify(i),
        "sa": "and"
    });
    
    req.headers({
        "x-rapidapi-key": "",
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {

        if (res.error) throw new Error(res.error);
        const data = JSON.parse(res.body);

        console.log(typeof data['ITEMS'])
        dataToWrite = dataToWrite.concat(data['ITEMS']);
        console.log(dataToWrite)
        counter = counter + 1
        console.log(counter)

        if (counter === 5) {
            console.log(dataToWrite)
            fs.writeFileSync('./database.json',JSON.stringify(dataToWrite), function(err, result) {
                console.log(result, err)
                if(err) throw new Error(result.error);
            })
        }
        
    });

}

console.log('written')
