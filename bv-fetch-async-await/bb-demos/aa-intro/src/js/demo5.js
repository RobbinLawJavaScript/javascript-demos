function Demo5() {

	const remoteDataURL = "https://api.jsonbin.io/v3/b/6070a88dceba85732671d94c/3";
	//const remoteDataURL = "https://api.jsonbin.io/b/6070a88d";
	
	const getPromise = async () => {
		console.log(2);
		const res = await fetch(remoteDataURL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json",
				'X-Bin-Meta': 'false'
			},
		})
		console.log('resolved response:', res);
		if (!res.ok) {
			throw new Error('OPPS, BAD ERROR');
	 	}
		const data = await res.json();
		console.log('resolved data:', data);
		console.log(3);
		return data;
	}

	console.log(1);
	getPromise()
	.then((data) => {
		console.log('then data:', data)
		let output = '';
		data.items.forEach((user) => {
			output += 
			`
				<div class="mb-3">
					<p>Id: ${user.id}</p>
					<p>Bone Type: ${user.boneType}</p>
				</div>
			`;
		});
		document.querySelector('#output').innerHTML = output;
	})
	.catch((err) => console.log('catch error:', err))
	console.log(4);
}

export default Demo5;