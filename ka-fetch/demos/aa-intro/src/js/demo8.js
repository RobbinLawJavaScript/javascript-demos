function Demo8() {

	const remoteDataURL = "https://api.jsonbin.io/b/6070a88dceba85732671d94c";
	//const remoteDataURL = "https://api.jsonbin.io/b/6070a88d";

	const getPromise = async () => {
		console.log(2);
		const res = await fetch(remoteDataURL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json"
			},
		})
		console.log('resolved response:', res);
		if (!res.ok) {
			throw new Error('OPPS, BAD ERROR');
	 	}
		const data = await res.json();
		console.log('resolved data:', data);
		console.log(2);
		return data;
	}

	console.log(1);
	getPromise()
	.then(data => console.log('then data:', data))
	.catch((err) => console.log('catch error:', err))
	console.log(3);
}

export default Demo8;