
import Demo1 from './demo1.js'
import Demo2 from './demo2.js'
//import Demo3 from './demo3.js'
//import Demo4 from './demo4.js'
//import Demo5 from './demo5.js'

let cookie = document.cookie
console.log(`loaded: ${cookie}`)
if(cookie == `demo=1`){
  Demo1()
} else if (cookie == `demo=2`){
  Demo2()
} else if (cookie == `demo=3`){
  //Demo3()
} else if (cookie == `demo=4`){
  //Demo4()
} else if (cookie == `demo=5`){
  //Demo5()
} else{
  //console.log(`No Demo Set`)
  document.cookie = "demo=1"
  location.reload(true)
}

const demo1 = document.querySelector('#demo1')
demo1.innerText = `Get data from local json files`
demo1.addEventListener('click', (e) => {
  document.cookie = "demo=1"
  location.reload(true)
})

const demo2 = document.querySelector('#demo2')
demo2.innerText = `Get data from a remote server`
demo2.addEventListener('click', (e) => {
  document.cookie = "demo=2"
  location.reload(true)
})

const demo3 = document.querySelector('#demo3')
demo3.innerText = ``
demo3.addEventListener('click', (e) => {
  document.cookie = "demo=3"
  location.reload(true)
})

const demo4 = document.querySelector('#demo4')
demo4.innerText = ``
demo4.addEventListener('click', (e) => {
  document.cookie = "demo=4"
  location.reload(true)
})

const demo5 = document.querySelector('#demo5')
demo5.innerText = ``
demo5.addEventListener('click', (e) => {
  document.cookie = "demo=5"
  location.reload(true)
})