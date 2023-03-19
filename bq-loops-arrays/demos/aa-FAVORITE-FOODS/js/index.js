
//import Demo1 from './demo1.js'
//import Demo2 from './demo2.js'
import Demo3 from './demo3.js'

let cookie = document.cookie
console.log(`loaded: ${cookie}`)
if(cookie == `demo=1`){
  //Demo1()
} else if (cookie == `demo=2`){
  //Demo2()
} else if (cookie == `demo=3`){
  Demo3()
} else{
  console.log(`no demo set`)
}

const demo1 = document.querySelector('#demo1')
demo1.addEventListener('click', (e) => {
  document.cookie = "demo=1"
  location.reload(true)
})

const demo2 = document.querySelector('#demo2')
demo2.addEventListener('click', (e) => {
  document.cookie = "demo=2"
  location.reload(true)
})

const demo3 = document.querySelector('#demo3')
demo3.addEventListener('click', (e) => {
  document.cookie = "demo=3"
  location.reload(true)
})