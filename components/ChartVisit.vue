<template>
  <div class="p-1">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js/auto'

export default {
  data() {
    return {
     
    }
  },

  mounted() {
     const ctx = document.getElementById('myChart').getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Ocak ',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz ',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık',
        ],
        datasets: [
          {
            label: 'Aylara Göre Site Ziyareti',
            data: [120, 123, 100, 90, 50, 200, 150, 300, 202, 120, 130, 120],
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