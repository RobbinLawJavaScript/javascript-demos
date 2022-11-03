function Demo4() {

	const remoteDataURL = "https://api.jsonbin.io/b/6070a88dceba85732671d94c";
	//const remoteDataURL = "https://api.jsonbin.io/b/6070a88d";

	const getPromise = () => {
		console.log(2);
		return new Promise((resolve, reject) => {
			console.log(3);
			fetch(remoteDataURL, {
				method: 'GET',
				headers: {
					'Accept': 'application/json. text/plain, */*',
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log('first then in getPromise response: ', res);
				if (!res.ok) {
					throw new Error('OOPS BAD RESPONSE');
				}
				return res.json();
			})
			.then((data) => {
				console.log('second then in getPromise data: ', data);
				resolve(data);
			})
			.catch((err) => {
				console.log('catch in getPromise error: ', err);
				reject(err);
			});
			console.log(4);
		});
	}

	console.log(1);
	getPromise()
	.then(data => console.log('then data:', data))
	.catch((err) => console.log('catch error:', err))
	console.log(5);
}

export default Demo4;