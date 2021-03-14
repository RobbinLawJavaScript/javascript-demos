
// Part 1
document.querySelector('a.feature.link').addEventListener('click', function (evt) {
    var imgFeature = document.querySelector('img.feature');
    imgFeature.src = evt.target.href;
    //Add your line of code below this comment.
    imgFeature.alt = evt.target.title;
    imgFeature.classList.remove('hidden');
    evt.preventDefault();
});


// Part 2 Add your code for this part below this comment.
document.querySelector('img.feature').addEventListener('mouseover', function (evt) {
    let pFeatureTitle = document.querySelector('p.feature.title');
    pFeatureTitle.innerHTML = evt.target.alt;
});

document.querySelector('img.feature').addEventListener('mouseout', function (evt) {
    let pFeatureTitle = document.querySelector('p.feature.title');
    pFeatureTitle.innerHTML = '';
});