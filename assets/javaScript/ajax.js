let request = new XMLHttpRequest();
request.onreadystatechange = () =>{
    try {
        if (request.readyState === request.DONE) {
			const data = JSON.parse(request.responseText);
			let str = `${data.quote} \n\n${data.author}`;
			document.getElementById('quote').innerText = str;
		}
    } catch (e) {
        console.log(e);
    }
};
request.open('GET', 'https://thatsthespir.it/api', true);
request.send();