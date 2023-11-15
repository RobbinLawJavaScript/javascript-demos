
// import chart from our library 
// https://www.chartjs.org/docs/latest/
import { Chart,
  LineController,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  Utils} from 'chart.js'

// import some more custom functions
import {getFoodTimesKeys, getFoodTimesValues} from './food.js'

// looking at the integration we need to register the
// line controller with the chart
Chart.register(LineController,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle)

const renderFoodTimesChart = () => {
  const chartElement = document.querySelector('#food-times-chart');

  const data = {
    labels: getFoodTimesKeys(),
    datasets: [{
      label: 'How hungry I am',
      data: getFoodTimesValues(),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const config = {
    type: 'line',
    data: data,
  };

  const myChart = new Chart(chartElement, config)
}

export {renderFoodTimesChart}