//import * as model from './model.js';
//import * as view from './view.js';

export class Controller {
  run(){
    document.querySelector('a.feature')
            .addEventListener('click', (e) => {
      const featureImage = document.querySelector('img.feature');
      e.preventDefault();
      //TODO: 
      //Change this code to include decision by adding an if and else
      //as per the specs.
      featureImage.src = e.target.href;
      featureImage.classList.remove('hidden');
      });
  }
}