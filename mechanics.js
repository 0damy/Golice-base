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


// this selects the place where the price of gold is represented in the first card
const mainPriceHolder = document.querySelector('.frst-card h3')

//  this is the html code responsible for the "sar" sign and its classes' set
const mainPriceCurrency = " <span class='d-flex flex-row-reverse'>sar</span>"
 


// this selects the place where the price of gold is represented in the second card
const changeablePriceHolder = document.querySelector('.scnd-card h3 span')



// this selects the amount of gold that the user wants to select in the second card
let goldAmount = document.querySelector('#gold-amount')



// this selects the currency that user wants to see the gold's price on in the second card
let goldCurrency = document.getElementById('gold-currency')



// this selects both spaces where the last syncing time is apended
const frstTimeSpace = document.querySelector('.frst-card p .syncing-time')
const scndTimeSpace = document.querySelector('.scnd-card p .syncing-time')


const marketState = document.querySelector('.frth-card .card-title')
const marketDiscription = document.querySelector('.blockquote span')


// this number represents how many grams are in one Troy Once, it's useful when you need to convert
const troyOnceToGram = 31.035



// this number represents how many Ryals(Saudi Arabia currency) are in one Dollar, it's also useful when converting
const usdToSar = 3.75


const onColor = '#0AA64D'
const offColor = '#F23030'


let syncingDate = new Date().toLocaleString();





let shownAmount = troyOnceToGram;
goldAmount.addEventListener('change', (event) => {

     let shownAmount = event.target.value;

     let currencyOption = document.getElementById('gold-currency').options[document.getElementById('gold-currency').selectedIndex].value;
     if (currencyOption == 'sar'){
          currentCurrecny = goldOriginalPriceSar
     }else if (currencyOption == 'usd'){
          currentCurrecny = goldOriginalPriceUsd
     }
     changeablePriceHolder.innerHTML = (currentCurrecny*shownAmount).toFixed(2);
})

let shownCurrency = 'usd'
goldCurrency.addEventListener('change', (event) => {
     
     let shownCurrency = event.target.value

     let amountOption = document.getElementById('gold-amount').options[document.getElementById('gold-amount').selectedIndex].value;
     if (shownCurrency == 'sar'){
          currentCurrecny = goldOriginalPriceSar
     }else if (shownCurrency == 'usd'){
          currentCurrecny = goldOriginalPriceUsd
     }
     changeablePriceHolder.innerHTML = (currentCurrecny*amountOption).toFixed(2);

})



// the api call for the current price of gold
let goldOriginalPriceSar = undefined
let goldOriginalPriceUsd = undefined
axios.get('https://api.metals.live/v1/spot')
.then(res => {
     goldOriginalPriceSar = parseFloat(res.data[0].gold)/troyOnceToGram*usdToSar
     goldOriginalPriceUsd = parseFloat(res.data[0].gold)/troyOnceToGram

     mainPriceHolder.innerHTML = goldOriginalPriceSar.toFixed(2);
     mainPriceHolder.innerHTML += mainPriceCurrency

     changeablePriceHolder.innerHTML = (goldOriginalPriceUsd*troyOnceToGram).toFixed(2);

     frstTimeSpace.innerHTML = `${syncingDate}`
     scndTimeSpace.innerHTML = `${syncingDate}`

     console.log(goldOriginalPriceSar)
})




// here i Implement the functionality resonsible for decidinf if the markets are opened or closed
let localTimeNow = new Date();

const hourMS = 60000
const dayMS = 3600000

let estOffset = -5
if (localTimeNow.getMonth() > 3 && localTimeNow.getMonth() < 11){
     estOffset = -4
}

let utc = localTimeNow.getTime() + (localTimeNow.getTimezoneOffset() * hourMS);

let est = new Date(utc + (dayMS*estOffset))

if ((est.getDay() == 5 && est.getHours() > 17) || est.getDay == 6 || (est.getDay() == 7 && est.getHours() < 6)) {
     marketState.innerHTML = 'Markets are closed now'
     marketState.style.color = offColor
     marketDiscription.innerHTML = 'When markets are closed the price of gold remianes constant at the same price since last time markets were opened'
}





// set values based on the page width for responsivity purposes
Chart.defaults.font.size = 12

// tension/ circle size/ 
let pageWidth = document.body.offsetWidth;
if (pageWidth < 600){
     Chart.defaults.font.size = 14
}
else if ( pageWidth < 1200){
     Chart.defaults.font.size = 16
}
else if ( pageWidth < 1500){
     Chart.defaults.font.size = 19
}
else {
     Chart.defaults.font.size = 22
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
                    suggestedMin: 218,
                    suggestedMax: 234,
               },
               x: {
                    beginAtZero: true,
                    grid: {
                         display: false
                    }
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