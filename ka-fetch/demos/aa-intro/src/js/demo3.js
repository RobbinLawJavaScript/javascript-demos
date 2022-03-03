function Demo3() {
	
	fetch('./data/bones.json')
	.then((res) => {
		return res.json()
	})
	.then(data => {
		console.log('data: ', data)
	})
	.catch((err) => {
		console.log('error: ', err)
	});

}

export default Demo3;