function Demo2(){

const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  console.log('inside createPost: create and return a promise');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      //const error = true;

      if(error === false) {
        resolve('SUCCESS: hi there');
      } else {
        reject('ERROR: Something went wrong');
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

console.log('begin of program');
outputPosts();

createPost({title: 'Post Three', body: 'This is post three'})
.then(data => {
  console.log(data);
  outputPosts();
})
.catch(err => {
  console.log(err);
});
console.log('promise returned to caller with state pending');
}

export default Demo2;