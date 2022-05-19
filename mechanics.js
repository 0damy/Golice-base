const labels = [
     '1 AM',
     '2 AM',
     '3 AM',
     '4 AM',
     '5 AM',
     '6 AM',
     '7 AM',
     '8 AM',
     '9 AM',
     '10 AM',
     '11 AM',
     '12 AM',
     '1 PM',
     '2 PM',
     '3 PM',
     '4 PM',
     '5 PM',
     '6 PM',
     '7 PM',
     '8 PM',
     '9 PM',
     '10 PM',
     '11 PM',
     '12 PM',
];
 
const data = {
     labels: labels,
     datasets: [{
       label: 'My First dataset',
       backgroundColor: '#5F6673',
       borderColor: '#8C7161',
       data: [0, 10, 5, 2, 20, 30, 45],
     }]
   };
 
const config = {
     type: 'line',
     data: data,
     options: {
          maintainAspectRatio: false,
          scales: {
               y: {
                    beginAtZero: true
               }
          }
     }
   };

const myChart = new Chart(
     document.getElementById('myChart'),
     config
   );  