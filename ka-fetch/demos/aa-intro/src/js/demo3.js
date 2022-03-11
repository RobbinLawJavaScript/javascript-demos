function Demo3() {

	const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	//const localDataURL = './data/bad-bones.json';

	console.log(1);
	fetch(localDataURL)
	.then((res)=>{
		console.log('then response: ', res);
		if (!res.ok) {
			throw new Error(res.error);
	 	}
		//res.json returns a promise which will
		//be the data object in JSON format
		return res.json();
	})
	.then((data) => {
		console.log('then data: ', data)
	});
	console.log(2);
	
}

export default Demo3;
