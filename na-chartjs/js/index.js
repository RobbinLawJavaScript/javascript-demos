// this is our main file because we've imported it in our 

// import our bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import our custom css
import '../css/main.css';

import {renderFoodThoughtsChart} from './food-thoughts-chart.js';
import {renderFoodTimesChart} from './food-times-chart.js';

// we just call the function
renderFoodThoughtsChart(); 
renderFoodTimesChart();
