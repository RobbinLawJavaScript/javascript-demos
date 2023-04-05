// import superheros library
import superheroes from 'superheroes'

const button = document.querySelector('#next-button')
button.addEventListener('click', () => {
  const mysuperhero = superheroes.random()
  document.querySelector('#output').innerText = mysuperhero
})