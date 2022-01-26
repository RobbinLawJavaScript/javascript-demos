export function run(){
  document.querySelector('a.feature')
          .addEventListener('click', (e) => {
    const featureImage = document.querySelector('img.feature');
    e.preventDefault();
    //TODO: 
    //Change this code to include decision by adding an if and else
    //as per the specs.
    if(featureImage.classList.contains('hidden')) {
        featureImage.src = e.target.href;
        featureImage.classList.remove('hidden');
        e.target.innerHTML = `Hide Barcelona`;
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
        e.target.innerHTML = `View Barcelona`;
    }
    });
}