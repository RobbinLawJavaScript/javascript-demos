// import superheros library
import superheroes from 'superheroes'

export default function Demo1() {

const container = document.querySelector('#app-container')
container.innerHTML = 
`
<h4>Super Heroes</h4>
<button id="next-button" class="btn btn-sm btn-outline-secondary me-1">
  next superhero
</button>
<div id="output"></div>
`
const button = document.querySelector('#next-button')
button.addEventListener('click', () => {
  const mysuperhero = superheroes.random()
  document.querySelector('#output').innerText = mysuperhero
})

}