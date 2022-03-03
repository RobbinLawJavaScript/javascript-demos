function Demo5() {

	const remoteDataURL = "https://api.jsonbin.io/b/6070a88dceba85732671d94c";
	//const remoteDataURL = "https://api.jsonbin.io/b/6070638aceba85732671b245";

	const getRemoteBones = async () => {
			const res = await fetch(remoteDataURL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json",
			},
		})
		if (res.status ==200 ){
			const data = await res.json();
			console.log(res);
			console.log(res.status);
			return data;
		} 
		else {
			//Handle Errors and Provide Status code:
			console.log(res.status, res.statusText);
			return null;
		}
	}

	let retrivedBones = getRemoteBones()
		.then(data => console.log('resolved', data))
		.catch((err) => console.log('rejected', err.message))
}

export default Demo5;