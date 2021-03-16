const fetch = require("node-fetch");
const fs = require('fs')

var dataToWrite = []
const pulls = 2

async function ugh() {
    for (let i=1; i < pulls+1;i++) {

        // execution pauses here until data is retrieved
        await fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew%5B%5D-!1950%2C2021-!0%2C5-!8%2C10-!0-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Title&p="+JSON.stringify(i)+"&sa=and", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
        dataToWrite = dataToWrite.concat(response)

    })
    .catch(err => {
        console.error(err);
    });
    }

    fs.writeFileSync('./databasePromises.json',JSON.stringify(dataToWrite), function(err, result) {
        console.log(result, err)
        if(err) throw new Error(result.error);
    })
}

ugh()







