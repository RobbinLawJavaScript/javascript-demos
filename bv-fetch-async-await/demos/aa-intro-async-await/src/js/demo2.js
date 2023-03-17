function Demo2() {

	const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	//const localDataURL = './data/bad-bones.json';

	// async and await are part of the ES7 spec
	// async functions always return a promise
	const getData = async () => {
		console.log(2);
		// fetch() returns a promise to res.
		// The await keyword "stalls" the JS assignment
		// until the data or error is returned (promise resolves or is rejected). 
		const res = await fetch(localDataURL);
		console.log('resolved response:', res);
		if (!res.ok) {
			throw new Error('OPPS');
	 	}
		// res.json() also returns a promise to data.
		const data = await res.json();
		console.log('resolved data:', data);
		console.log(4);
		return data;
	}

	console.log(1);
	getData()
	.then(data => {
		console.log('getData.then data:', data)
	})
	.catch(err => {
		console.log('getData.catch error:', err)
	});
	console.log(3);

}

export default Demo2;