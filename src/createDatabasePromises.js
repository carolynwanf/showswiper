fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew%5B%5D-!1950%2C2021-!0%2C5-!8%2C10-!0-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Title&p=1&sa=and", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});