function Demo2(){

const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      //const error = true;

      if(error === false) {
        resolve('hi there');
      } else {
        reject('Error: Something went wrong');
      }
    }, 3000);
  });
}

function outputPosts() {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
}

outputPosts();
createPost({title: 'Post Three', body: 'This is post three'})
.then(data => {
  console.log(data);
  outputPosts();
})
.catch(err => {
  console.log(err);
});

}

export default Demo2;