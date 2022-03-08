function Demo4() {

	const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	//const localDataURL = './data/bad-bones.json';


	// async and await are part of the ES7 spec
	// async functions always returns a promise
	const getPromise = async () => {
		console.log(5);
		// The await keyword "stalls" the JS assignment
		// until the data is returned (promise resolves or is rejected). 
		const res = await fetch(localDataURL);
		console.log('resolved response:', res);
		if (!res.ok) {
			throw new Error(res.error);
	 	}
		const data = await res.json();
		console.log('resolved data:', data);
		return data;
	}

	console.log(1);
	console.log(2);
	getPromise()
	.then(data => console.log('then data:', data))
	.catch(err => console.log('catch error:', err));
	console.log(3);
	console.log(4);

}

export default Demo4;