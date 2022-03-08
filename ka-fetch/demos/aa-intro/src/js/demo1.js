function Demo1() {

	const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	//const localDataURL = './data/bad-bones.json';

	fetch(localDataURL)
	.then((res)=>{
		console.log('then response: ', res);
		if (!res.ok) {
			throw new Error(res.error);
	 }
	 return res;
	});

}

export default Demo1;
