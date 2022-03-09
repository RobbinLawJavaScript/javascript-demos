function Demo5() {

	const remoteDataURL = "https://api.jsonbin.io/b/6070a88dceba85732671d94c";
	//const remoteDataURL = "https://api.jsonbin.io/b/6070a88d";

	const getPromise = async () => {
			const res = await fetch(remoteDataURL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json",
				'X-JSON-Path': "items"
			},
		})
		console.log('resolved response:', res);
		if (!res.ok) {
			throw new Error('OPPS, BAD ERROR');
	 	}
		const data = await res.json();
		console.log('resolved data:', data);
		return data;
	}

	getPromise()
		.then(data => console.log('then data:', data))
		.catch((err) => console.log('catch error:', err))
}

export default Demo5;