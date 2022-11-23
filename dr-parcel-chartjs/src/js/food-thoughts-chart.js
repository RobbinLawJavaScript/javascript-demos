
// import chart from our library 
// https://www.chartjs.org/docs/latest/
import { Chart,
  DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  SubTitle} from 'chart.js'

  // how you import files locally
import {getFoodThoughtsKeys, getFoodThoughtsValues} from './food.js'

// looking at the integration we need to register the
// doughnut controller with the chart
Chart.register(DoughnutController,
  ArcElement,
  Legend,
  Title,
  Tooltip,
  SubTitle)

const renderFoodThoughtsChart= () => {
  // get the chart element
  const chartElement = document.querySelector('#food-thoughts-chart');

  // let's take a look at the data and let's make a 
  // donut chart... I know right
  const data = {
    labels: getFoodThoughtsKeys(),
    datasets: [{
      label: 'Food Thoughts',
      data: getFoodThoughtsValues(),
      backgroundColor: [
         'red',
         'green',
         'blue',
         'yellow',
         'orange',
         'purple',
         'black',
         'gray'
      ],
      hoverOffset: 14
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const myChart = new Chart(chartElement, config)
}

export {renderFoodThoughtsChart}