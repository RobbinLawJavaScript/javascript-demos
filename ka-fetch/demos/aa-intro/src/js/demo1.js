function Demo1() {

	fetch('./data/bones.json')
	.then((res)=>{
		console.log('resolved: ', res)
	});

}

export default Demo1;
