<template>
  <div class="p-1">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js/auto'
import apiRequest from '../services/apiRequest'
export default {
  data() {
    return {

    }
  },

  mounted() {
let visitData= []

    apiRequest('/visit', 'GET').then((visitRes) => {
      visitData = visitRes
      console.log(  visitData[0].moon)
    })

    const ctx = document.getElementById('myChart').getContext('3d')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          visitData[0].moon,
          visitData[1].moon,
          visitData[2].moon,
          visitData[3].moon,
          visitData[4].moon,
          visitData[5].moon,
          visitData[6].moon,
          visitData[7].moon,
          visitData[8].moon,
          visitData[9].moon,
          visitData[10].moon,
          visitData[11].moon
        ],
        datasets: [
          {
            label: 'Aylara Göre Site Ziyareti',
            data: [
              visitData[0].siteVisit,
              visitData[1].siteVisit,
              visitData[2].siteVisit,
              visitData[3].siteVisit,
              visitData[4].siteVisit,
              visitData[5].siteVisit,
              visitData[6].siteVisit,
              visitData[7].siteVisit,
              visitData[8].siteVisit,
              visitData[9].siteVisit,
              visitData[10].siteVisit,
              visitData[11].siteVisit,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
    console.log(myChart)
  },
}
</script>