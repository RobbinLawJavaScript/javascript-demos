export default function Demo1() {
	
	//const localDataURL = './data/bones.json';
	//const localDataURL = './data/bones2.json';
	const localDataURL = './data/bad-bones.json';

	console.log(1);
	fetch(localDataURL)
	.then((res) => {
		console.log('fetch.then response: ', res);
		if (!res.ok) {
			throw new Error('OOPS');
		}
		return res.json();
	})
	.then(data => {
		console.log('fetch.then data: ', data);
	})
	.catch((err) => {
		console.log('fetch.catch error: ', err);
	});
	console.log(2);
}