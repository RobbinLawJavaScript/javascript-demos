export default function Demo2(){

let posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
]

let interval
const createPost = (post, scenario, delay) => {
  console.log(`createPost begin with scenario ${scenario}`)
  return new Promise((resolve, reject) => {
    interval = setTimeout(() => {
      if(scenario == 1) {
        posts.push(post)
        resolve('SUCCESS: New post added')
      } else {
        reject('ERROR: Something went wrong')
      }
    }, delay)
    console.log(`createPost end with scenario ${scenario}: promise returned to caller with state pending`)
  })
}

const outputList = document.querySelector('#output-list')

const outputPosts = () => {
  outputList.replaceChildren()
  let output = ``
  posts.forEach(post => {
    output += `<p>${post.title}</p>`
  })
  outputList.insertAdjacentHTML('beforeend', output)
}

const app = async (post, scenario, delay) => {
  try{
    console.log(`app try begin with scenario ${scenario}`)
    outputPosts()
    const resolveResponse = await createPost(post, scenario, delay)
    console.warn(resolveResponse)
    outputPosts()
    console.log(`app try end with scenario ${scenario}`)
  }
  catch(error){
    console.log(`app catch begin with scenario ${scenario}`)
    console.error(error)
    console.log(`app catch end with scenario ${scenario}`)
  }
}

let count = 0
console.clear()
console.log(`Demos are reset and ready to run by pressing the NEXT button`)

document.querySelector('#button-next').addEventListener("click", (e) => {
  count ++
  console.clear()
  if(count == 1){
    app({title: 'Post Three', body: 'This is post three'}, 1, 5000)
  } else if (count == 2){
    app({title: 'Post Four', body: 'This is post four'}, 2, 5000)
  } else if (count == 3){
    app({title: 'Post Five', body: 'This is post five'}, 1, 5000)
  } else {
    console.log(`Press the RESET button to start over`)
  }
})

document.querySelector('#button-reset').addEventListener("click", (e) => {
  count = 0
  console.clear()
  clearInterval(interval)
  posts.splice(0,posts.length)
  outputPosts()
  posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
  ]
  console.log(`Demos are reset and ready to run by pressing the NEXT button`)
})

}