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
      visitData: [],
    }
  },

  mounted() {
    apiRequest('/visit', 'GET').then((visitRes) => {
      this.visitData = visitRes
    })

    const ctx = document.getElementById('myChart').getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          this.visitData[0].moon,
          this.visitData[1].moon,
          this.visitData[2].moon,
          this.visitData[3].moon,
          this.visitData[4].moon,
          this.visitData[5].moon,
          this.visitData[6].moon,
          this.visitData[7].moon,
          this.visitData[8].moon,
          this.visitData[9].moon,
          this.visitData[10].moon,
          this.visitData[11].moon,
        ],
        datasets: [
          {
            label: 'Aylara Göre Site Ziyareti',
            data: [
              this.visitData[0].siteVisit,
              this.visitData[1].siteVisit,
              this.visitData[2].siteVisit,
              this.visitData[3].siteVisit,
              this.visitData[4].siteVisit,
              this.visitData[5].siteVisit,
              this.visitData[6].siteVisit,
              this.visitData[7].siteVisit,
              this.visitData[8].siteVisit,
              this.visitData[9].siteVisit,
              this.visitData[10].siteVisit,
              this.visitData[11].siteVisit,
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