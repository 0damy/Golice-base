const days = []


const hours = [
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

const textuals = {
     en: {
          navbarLabels:{
               philosophy: 'PHILOSOPHY',
               about: 'ABOUT',
               en: 'en',
               ar: 'ar',
               light: 'light',
               dark: 'dark'
          },
          frstCard: {
               K: '24K',
               measureUnit: '-gold gram price',
               currency: 'sar'
          },
          scndCard: {
               K: '24K',
               title1: '-gold',
               measureUnit: ['1 g', '5 g', '10 g', '20 g', '1 oz', '50 g', '100 g', '200 g', '500 g', '1 kg'],
               title2: 'price',
               currencyList: ['usd', 'sar']
          },
          thrdCard: {
               title: 'gold price over 24 hours'
          }
     },
     ar: {

     }
}

// the api call for the current price of gold


// set values based on the page width for responsivity purposes
Chart.defaults.font.size = 12

let pageWidth = document.body.offsetWidth;
if (pageWidth < 600){
     Chart.defaults.font.size = 15
}
else if ( pageWidth < 1200){
     Chart.defaults.font.size = 18
}
else if ( pageWidth < 1500){
     Chart.defaults.font.size = 21
}
else {
     Chart.defaults.font.size = 24
}



// the general font of all the charts
Chart.defaults.font.family = "'Inknut Antiqua', 'Tomorrow'"

// the function that controls the charts where the data are undefined 
const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

// selects the canves where to imped the first chart
const monthChart = document.getElementById('hoursChart').getContext('2d');


const chart1 = new Chart(monthChart, {
     // specifies the type of the chart(whether a bar, pie, table or a line chart)
     type: 'line',
     
     // here we place our data 
     data: {
          labels: hours,
          datasets: [{
               label: textuals.en.thrdCard.title,
               backgroundColor: '#8C7161aa',
               borderColor: '#8C7161',
               color: '#0d0d0d',
               data: [222.64, 222.3, 219.2, 219.19, 220.47, 227.24, 227, 227, 218, NaN, NaN, 234, 222],

               pointRadius: 3.4,

               segment: {
                    borderColor: ctx => skipped(ctx, '#8C716188') || down(ctx, '#8C7161'),
                    borderDash: ctx => skipped(ctx, [6, 6]),
                  },
               spanGaps: true,

               tension: 0,
          }]
     },
     // here we place the some of the styling propereties
     options: {
          maintainAspectRatio: false,
          scales: {
               y: {
                    suggestedMin: 220,
                    suggestedMax: 230
               },
               x: {
                    beginAtZero: true,
                    suggestedMax: 2
               }
          },
          layout: {

          },
          responsive: true,
          plugins: {
               suggestedMin: 10,
               suggestedMax: 10
          }
     }
})