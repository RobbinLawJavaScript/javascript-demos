function Demo1() {

	//This code is from the following recording by Brad Traversy.
	//https://www.youtube.com/watch?v=Oive66jrwBs

	document.querySelector('#getText').addEventListener('click', getText);
	document.querySelector('#getUsers').addEventListener('click', getUsers);
	document.querySelector('#getPosts').addEventListener('click', getPosts);
	
	function getText(){
		// fetch('./data/text.txt')
		// .then((res) => {
		//   return res.text();
		// })

		fetch('./data/text.txt')
		.then((res) => res.text())
		.then((data) => 
			document.querySelector('#output').innerHTML = data
		)
		.catch((err) => console.log(err));
	}
	
	function getUsers(){
		fetch('./data/users.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '<h2>Users</h2>';
			data.forEach((user) => {
				output += 
				`
					<ul>
						<li>ID: ${user.id}</li>
						<li>Name: ${user.name}</li>
						<li>Email: ${user.email}</li>
					</ul>
				`;
			});
			document.querySelector('#output').innerHTML = output;
		})
		.catch((err) => console.log(err));
	}
	
	function getPosts(){
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((data) => {
			let output = '<h2>Posts</h2>';
			data.forEach((post) => {
				output += 
				`
					<div>
						<h3>${post.title}</h3>
						<p>${post.body}</p>
					</div>
				`;
			});
			document.querySelector('#output').innerHTML = output;
		})
		.catch((err) => console.log(err))
	}

}

export default Demo1;
