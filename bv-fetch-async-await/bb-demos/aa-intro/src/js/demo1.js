function Demo1() {
	
	const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	//const localDataURL = './data/bad-bones.json';

	console.log('begin of program');
	fetch(localDataURL)
	.then((res) => {
		console.log('then response: ', res);
		if (!res.ok) {
			throw new Error('OOPS');
	 	}
		return res.json();
	})
	.then(data => {
		console.log('then data: ', data);
	})
	.catch((err) => {
		console.log('catch error: ', err);
	});
	console.log('promise from fetch returned to caller with state pending');

}

export default Demo1;