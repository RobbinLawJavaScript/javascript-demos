export default function Demo2(){

const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

const createPost = (post, scenario, delay) => {
  console.log(`createPost begin with scenario ${scenario}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(scenario == 1) {
        posts.push(post)
        resolve('SUCCESS: New post added');
      } else {
        reject('ERROR: Something went wrong');
      }
    }, delay)
    console.log(`createPost end with scenario ${scenario}: promise returned to caller with state pending`);
  })
}

const outputPosts = () => {
  document.body.replaceChildren()
  let output = ``
  posts.forEach(post => {
    output += `<li>${post.title}</li>`
  })
  document.body.insertAdjacentHTML('beforeend', output)
}

const app = async (post, scenario, delay) => {
  try{
    outputPosts()
    const resolveResponse = await createPost(post, scenario, delay)
    console.warn(resolveResponse)
    outputPosts()
  }
  catch(error){
    console.error(error);
  }
}

app({title: 'Post Three', body: 'This is post three'}, 1, 5000)
app({title: 'Post Four', body: 'This is post four'}, 2, 10000)
app({title: 'Post Five', body: 'This is post five'}, 1, 15000)

}