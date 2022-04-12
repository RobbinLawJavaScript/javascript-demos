function Demo2() {

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
	 return res;
	});
	console.log(2);

}

export default Demo2;
