function Demo2() {

	fetch('./data/bones.json')
	.then((res)=>{
		console.log('resolved response: ', res) 
		//res.json returns a promise which will
		//be the data object in JSON format
		return res.json()
	})
	.then((data) => {
		console.log('data: ', data)
	});
	
}

export default Demo2;
