const days = [
     '1 May',
     '2 May',
     '3 May',
     '4 May',
     '5 May',
     '6 May',
     '7 May',
     '8 May',
     '9 May',
     '10 May',
     '11 May',
     '12 May',
     '13 May',
     '14 May',
     '15 May',
     '16 May',
     '17 May',
     '18 May',
     '19 May',
     '20 May',
     '21 May',
     '22 May',
     '23 May',
     '24 May',
     '25 May',
     '26 May',
     '27 May',
     '28 May',
     '29 May',
     '30 May',
]

const months = [
     "Jan", "Feb", 
     "Mar", "Apr", "May", 
     "Jun", "Jul", "Aug",
     "Sep", "Oct", 
     "Nov", "Dec"
 ];

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
               info: 'INFO',
               about: 'ABOUT',
               en: 'en',
               ar: 'عربي',
               light: 'light',
               dark: 'dark'
          },
          frstCard: {
               K: '24K',
               measureUnit: '-gold gram price',
               currency: " <span class='d-flex flex-row-reverse'>sar</span>"
          },
          scndCard: {
               K: '24K',
               title1: '-gold',
               measureUnit: ['1 g', '5 g', '10 g', '20 g', '1 oz', '50 g', '100 g', '200 g', '500 g', '1 kg'],
               title2: ' price',
               currencyList: ['usd', 'sar']
          },
          thrdCard: {
               title: 'gold price over 24 hours'
          },
          frthCard: {
               openState: {
                    opentitle: 'markets are opened now',
                    openDiscription: 'When markets are opened the price is fluctuating all the time, but when closed it remines constant.'
               },
               closeState: {
                    closeTitle: 'Markets are closed now',
                    closeDiscription: 'When markets are closed the price of gold remianes constant at the same price since last time markets were opened.'
               },
               mainFooter: 'still interested? <a href="#" class="active"> learn more...</a>',
               footerA: ' learn more...'
          },
          fifthCard: {
               title: "gold price over 30 days"
          },
          footer: {
               rights: `© ${new Date().getFullYear()} Mohamad Khalid. All Rights Reserved`
          }
     },
     ar: {
          navbarLabels:{
               info: 'عن الذهب',
               about: 'عن الموقع',
               en: 'en',
               ar: 'عربي',
               light: 'مضيء',
               dark: 'مظلم'
          },
          frstCard: {
               K: 'جرام',
               measureUnit: 'ذهب عيار24',
               currency: " <span class='d-flex flex-row-reverse'>ريال</span>"
          },
          scndCard: {
               K: 'ذهب',
               title1: '',
               measureUnit: ['1 g', '5 g', '10 g', '20 g', '1 oz', '50 g', '100 g', '200 g', '500 g', '1 kg'],
               title2: ' من عيار24',
               currencyList: ['دولار', 'ريال']
          },
          thrdCard: {
               title: 'سعر الذهب خلال 24 ساعة'
          },
          frthCard: {
               openState: {
                    opentitle: 'اسواق الذهب مفتوحة حالياَ',
                    openDiscription: 'عندما تكون الاسواق مفتوحة يتقلب السعر صعودًا  ونزولًا، عند الاغلاق يكون السعر ثابتًا'
               },
               closeState: {
                    closeTitle: 'اسواق الذهب مغلقة حالياَ',
                    closeDiscription: 'عندما تكون الاسواق مغلقة فإن السعر الذي تراه ثابت منذ آخر افتتاح'
               },
               mainFooter: 'مهتم بالتفاصيل؟ <a href="#" class="active">تعلم المزيد من هنا</a>',
               footerA: ''
          },
          fifthCard: {
               title: "سعر الذهب خلال 30 يوم"
          },
          footer: {
               rights: `© ${new Date().getFullYear()} جميع الحقوق محفوظة لمحمد خالد`
          }
     }
}


// this selects the place where the price of gold is represented in the first card
const mainPriceHolder = document.querySelector('.frst-card h3')
 


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
const troyOnceToGram = 31.10348



// this number represents how many Ryals(Saudi Arabia currency) are in one Dollar, it's also useful when converting
const usdToSar = 3.75


const onColor = '#0AA64D'
const offColor = '#F23030'


let syncingDate = new Date().toLocaleString();








// here I set the controlling properity for the language checkbox
langBox = document.querySelector('#langbox')

// here I will list all the place holders needed for the translator
infoPlace = document.querySelector('.nav-item:nth-of-type(1) a')
aboutPlace = document.querySelector('.nav-item:nth-of-type(2) a')

arPlace = document.querySelector('li p:nth-of-type(1)')
enPlace = document.querySelector('li p:nth-of-type(2)')
goldCurrency1 = document.querySelector('#gold-currency option:nth-of-type(1)')
goldCurrency2 = document.querySelector('#gold-currency option:nth-of-type(2)')

lightPlace = document.querySelector('#light-control p:nth-of-type(1)')
darkPlace = document.querySelector('#light-control p:nth-of-type(2)')

frstCardKPlace = document.querySelector('.frst-card h2 #goldK')
frstCardMeasurPlace = document.querySelector('.frst-card h2 span:nth-of-type(2)')

scndCardKPlace = document.querySelector('.scnd-card h2 #goldK')
scndCardMeasur1Place = document.querySelector('.scnd-card h2 span:nth-of-type(2)')
scndCardMeasur2Place = document.querySelector('.scnd-card h2 span:nth-of-type(3)')

frthCardTitlePlace = document.querySelector('.frth-card h2')
frthCardDiscriptPlace = document.querySelector('.frth-card blockquote span')
frthCardFooterPlace = document.querySelector('.frth-card blockquote .blockquote-footer')

rightsPlace =  document.querySelector('.rights')


// this is in a try to know if the user preffers the arabic language
prefferedLanguage = window.navigator.userLanguage || window.navigator.language;
if ((prefferedLanguage[0] === 'a' || prefferedLanguage[0] === 'A') && (prefferedLanguage[1] === 'r' || prefferedLanguage[1] === 'R')){
     langBox.checked == false
}


// here is the language changing functionality itself When initialized 
if (langBox.checked == true)
{
     infoPlace.innerHTML = textuals.en.navbarLabels.info
     aboutPlace.innerHTML = textuals.en.navbarLabels.about
     arPlace.innerHTML = textuals.en.navbarLabels.ar
     enPlace.innerHTML = textuals.en.navbarLabels.en
     lightPlace.innerHTML = textuals.en.navbarLabels.light
     darkPlace.innerHTML = textuals.en.navbarLabels.dark
     frstCardKPlace.innerHTML = textuals.en.frstCard.K
     frstCardMeasurPlace.innerHTML = textuals.en.frstCard.measureUnit
     scndCardKPlace.innerHTML = textuals.en.scndCard.K
     scndCardMeasur1Place.innerHTML = textuals.en.scndCard.title1
     scndCardMeasur2Place.innerHTML = textuals.en.scndCard.title2
     frstChartTitle = textuals.en.thrdCard.title
     scndChartTitle = textuals.en.fifthCard.title
     rightsPlace.innerHTML = textuals.en.footer.rights
}else {
     infoPlace.innerHTML = textuals.ar.navbarLabels.info
     aboutPlace.innerHTML = textuals.ar.navbarLabels.about
     arPlace.innerHTML = textuals.ar.navbarLabels.ar
     enPlace.innerHTML = textuals.ar.navbarLabels.en
     lightPlace.innerHTML = textuals.ar.navbarLabels.light
     darkPlace.innerHTML = textuals.ar.navbarLabels.dark
     frstCardKPlace.innerHTML = textuals.ar.frstCard.K
     frstCardMeasurPlace.innerHTML = textuals.ar.frstCard.measureUnit
     scndCardKPlace.innerHTML = textuals.ar.scndCard.K
     scndCardMeasur1Place.innerHTML = textuals.ar.scndCard.title1
     scndCardMeasur2Place.innerHTML = textuals.ar.scndCard.title2
     frstChartTitle = textuals.ar.thrdCard.title
     scndChartTitle = textuals.ar.fifthCard.title
     rightsPlace.innerHTML = textuals.ar.footer.rights
     goldCurrency1.innerHTML = textuals.ar.scndCard.currencyList[0]
     goldCurrency2.innerHTML = textuals.ar.scndCard.currencyList[1]
}


// here when the language functionality is changed manually by the button in the page
langBox.addEventListener('change', () => {
     if (langBox.checked == true)
{
     infoPlace.innerHTML = textuals.en.navbarLabels.info
     aboutPlace.innerHTML = textuals.en.navbarLabels.about
     arPlace.innerHTML = textuals.en.navbarLabels.ar
     enPlace.innerHTML = textuals.en.navbarLabels.en
     lightPlace.innerHTML = textuals.en.navbarLabels.light
     darkPlace.innerHTML = textuals.en.navbarLabels.dark
     frstCardKPlace.innerHTML = textuals.en.frstCard.K
     frstCardMeasurPlace.innerHTML = textuals.en.frstCard.measureUnit
     document.querySelector('.frst-card h3 span').innerHTML = 'sar'
     scndCardKPlace.innerHTML = textuals.en.scndCard.K
     scndCardMeasur1Place.innerHTML = textuals.en.scndCard.title1
     scndCardMeasur2Place.innerHTML = textuals.en.scndCard.title2
     frstChartTitle = textuals.en.thrdCard.title
     scndChartTitle = textuals.en.fifthCard.title
     rightsPlace.innerHTML = textuals.en.footer.rights
     goldCurrency1.innerHTML = textuals.en.scndCard.currencyList[0]
     goldCurrency2.innerHTML = textuals.en.scndCard.currencyList[1]
     if ((est.getDay() == 5 && est.getHours() > 17) || est.getDay == 6 || (est.getDay() == 7 && est.getHours() < 6)) {
          frthCardTitlePlace.innerHTML = textuals.en.frthCard.closeState.closeTitle
          marketState.style.color = offColor
          frthCardDiscriptPlace.innerHTML = textuals.en.frthCard.closeState.closeDiscription
     }else{
          frthCardTitlePlace.innerHTML = textuals.en.frthCard.openState.opentitle
          frthCardDiscriptPlace.innerHTML = textuals.en.frthCard.openState.openDiscription
     }
     frthCardFooterPlace.innerHTML = textuals.en.frthCard.mainFooter
     frthCardFooterPlace.style.textAlign = 'left'
     document.querySelector('.blockquote').style.textAlign = 'left'
}else {
     infoPlace.innerHTML = textuals.ar.navbarLabels.info
     aboutPlace.innerHTML = textuals.ar.navbarLabels.about
     arPlace.innerHTML = textuals.ar.navbarLabels.ar
     enPlace.innerHTML = textuals.ar.navbarLabels.en
     lightPlace.innerHTML = textuals.ar.navbarLabels.light
     darkPlace.innerHTML = textuals.ar.navbarLabels.dark
     frstCardKPlace.innerHTML = textuals.ar.frstCard.K
     frstCardMeasurPlace.innerHTML = textuals.ar.frstCard.measureUnit
     document.querySelector('.frst-card h3 span').innerHTML = 'ريال'
     scndCardKPlace.innerHTML = textuals.ar.scndCard.K
     scndCardMeasur1Place.innerHTML = textuals.ar.scndCard.title1
     scndCardMeasur2Place.innerHTML = textuals.ar.scndCard.title2
     frstChartTitle = textuals.ar.thrdCard.title
     scndChartTitle = textuals.ar.fifthCard.title
     rightsPlace.innerHTML = textuals.ar.footer.rights
     goldCurrency1.innerHTML = textuals.ar.scndCard.currencyList[0]
     goldCurrency2.innerHTML = textuals.ar.scndCard.currencyList[1]
     if ((est.getDay() == 5 && est.getHours() > 17) || est.getDay == 6 || (est.getDay() == 7 && est.getHours() < 6)) {
          frthCardTitlePlace.innerHTML = textuals.ar.frthCard.closeState.closeTitle
          marketState.style.color = offColor
          frthCardDiscriptPlace.innerHTML = textuals.ar.frthCard.closeState.closeDiscription
     }else{
          frthCardTitlePlace.innerHTML = textuals.ar.frthCard.openState.opentitle
          frthCardDiscriptPlace.innerHTML = textuals.ar.frthCard.openState.openDiscription
     }
     frthCardFooterPlace.innerHTML = textuals.ar.frthCard.mainFooter
     frthCardFooterPlace.style.textAlign = 'right'
     document.querySelector('.blockquote').style.textAlign = 'right'
}
})





// the switch for controlling the light mode in the main page
const lightBox = document.querySelector('#lightBox')

// the constants the decides what light mode does the user preffers 
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

// decides user's preffernce
if (userPrefersDark == true){
     lightBox.checked = true
}else if (userPrefersLight == true){
     lightBox.checked = false
}

// the changed elements by the light switch
let body = document.querySelector('body')
let navbar = document.querySelector('nav')
let cards = document.querySelectorAll('.cardUti')
let links = document.querySelectorAll('.tab-link')
let frstPriceHolder = document.querySelector('.frst-card h3')


// only a small change test
let balls = 2


let scndPriceHolder = document.querySelector('.scnd-card h3 span:nth-of-type(1)')
let selections = document.querySelectorAll('select')
let navIcon = document.querySelector('.navbar-toggler-icon')


// the initilizing of light functionality
if (lightBox.checked == true){
     body.style.backgroundColor = '#0d0d0d'
     body.style.color = '#f2f2f2'
     navbar.style.color = '#f2f2f2'
     for (let i = 0; i < cards.length; i++){
          cards[i].style.backgroundColor = '#353940'
          cards[i].style.boxShadow = '0px 5px 20px -14px #fff'
     }
     for (let i = 0; i < links.length; i++){
          links[i].style.color = '#f2f2f2'
     }
     frstPriceHolder.style.color = '#f2f2f2'
     scndPriceHolder.style.color = '#f2f2f2'
     for (let i = 0; i < selections.length; i ++){
          selections[i].style.backgroundColor = '#353940'
          selections[i].style.boxShadow = '0px 0px 10px -4px #f2f2f2'

     }
     // this css properity changes a png color via filter, it's generated automatically by this useful tool which I've found online on codepin     
     //  https://codepen.io/sosuke/pen/Pjoqqp
     navIcon.style.filter = 'invert(99%) sepia(7%) saturate(31%) hue-rotate(353deg) brightness(113%) contrast(90%)'
}
lightBox.addEventListener('change', () => {
     if (lightBox.checked == true){
          body.style.backgroundColor = '#0d0d0d'
          body.style.color = '#f2f2f2'
          navbar.style.color = '#f2f2f2'
          for (let i = 0; i < cards.length; i++){
               cards[i].style.backgroundColor = '#353940'
               cards[i].style.boxShadow = '0px 5px 20px -14px #fff'
          }
          for (let i = 0; i < links.length; i++){
               links[i].style.color = '#f2f2f2'
          }
          frstPriceHolder.style.color = '#f2f2f2'
          scndPriceHolder.style.color = '#f2f2f2'
          for (let i = 0; i < selections.length; i ++){
               selections[i].style.backgroundColor = '#353940'
               selections[i].style.boxShadow = '0px 0px 10px -4px #f2f2f2'
     
          }
          // this css properity changes a png color via filter, it's generated automatically by this useful tool which I've found online on codepin     
          //  https://codepen.io/sosuke/pen/Pjoqqp
          navIcon.style.filter = 'invert(99%) sepia(7%) saturate(31%) hue-rotate(353deg) brightness(113%) contrast(90%)'
     }else{
               body.style.backgroundColor = '#5f667328'
               body.style.color = '#0d0d0d'
               navbar.style.color = '#0d0d0d'
               for (let i = 0; i < cards.length; i++){
                    cards[i].style.backgroundColor = '#f2f2f2'
                    cards[i].style.boxShadow = '0px 5px 20px -14px #353940'
               }
               for (let i = 0; i < links.length; i++){
                    links[i].style.color = '#0d0d0d'
               }
               frstPriceHolder.style.color = '#0d0d0d'
               scndPriceHolder.style.color = '#0d0d0d'
               for (let i = 0; i < selections.length; i ++){
                    selections[i].style.backgroundColor = '#f2f2f2'
                    selections[i].style.boxShadow = '0px 0px 10px -4px #0d0d0d'
          
               }
               // this css properity changes a png color via filter, it's generated automatically by this useful tool which I've found online on codepin     
               //  https://codepen.io/sosuke/pen/Pjoqqp
               navIcon.style.filter = 'invert(0%) sepia(36%) saturate(7343%) hue-rotate(149deg) brightness(93%) contrast(90%)'
     }
})






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
     if (langBox.checked == true){
          mainPriceHolder.innerHTML += textuals.en.frstCard.currency
     }else{
          mainPriceHolder.innerHTML += textuals.ar.frstCard.currency
     }
     
     changeablePriceHolder.innerHTML = (goldOriginalPriceUsd*troyOnceToGram).toFixed(2);
     
     frstTimeSpace.innerHTML = `${syncingDate}`
     scndTimeSpace.innerHTML = `${syncingDate}`
     
     console.log(goldOriginalPriceSar)
})




// here i Implement the functionality resonsible for decidinf if the markets are opened or closed
let localTimeNow = new Date();

const hourMS = 60000
const dayMS = 3600000

// detect if its the daylight saving time in the united states or not, so the formual to calculate the gap between utc and est timezones
let estOffset = -5
if (localTimeNow.getMonth() > 3 && localTimeNow.getMonth() < 11){
     estOffset = -4
}

let utc = localTimeNow.getTime() + (localTimeNow.getTimezoneOffset() * hourMS);

// turns a timestamp to human readable date and time
let est = new Date(utc + (dayMS*estOffset))






// fetch data from database via the index page
const monthDataAdress = document.querySelectorAll('.monthData')
let monthDataPrice = []
let monthDataLabel = []
for(let i = 0; i < monthDataAdress.length; i++)
{
     monthDataPrice.push((parseFloat(monthDataAdress[i].children[1].innerHTML)*usdToSar).toFixed(2))
     monthDataLabel.push(`${monthDataAdress[i].children[4].innerHTML} ${months[monthDataAdress[i].children[3].innerHTML-1]}`) 
}

const dayDataAdress = document.querySelectorAll('.dayData')
let dayDataPrice = []
let dayDataLabel = []
for(let i = 0; i < dayDataAdress.length; i++)
{
     dayDataPrice.push((parseFloat(dayDataAdress[i].children[1].innerHTML)*usdToSar).toFixed(2))
     let dataHourVal = parseInt(dayDataAdress[i].children[5].innerHTML)
     if (dataHourVal >= 1 && dataHourVal <= 12)
     {
          dayDataLabel.push(`${dataHourVal} AM`)
     }
     else if ( dataHourVal >= 13 && dataHourVal <= 24)
     {
          dayDataLabel.push(`${dataHourVal - 12} PM`)
     }
}




// check if it the time when the gold markets are closed then it changes the fourth card contant based on this decision
if (langBox.checked === true){
     if (est.getHours() > 17 || est.getDay() === 6 || est.getHours() < 6) {
          frthCardTitlePlace.innerHTML = textuals.en.frthCard.closeState.closeTitle
          marketState.style.color = offColor
          frthCardDiscriptPlace.innerHTML = textuals.en.frthCard.closeState.closeDiscription
     }else{
          frthCardTitlePlace.innerHTML = textuals.en.frthCard.openState.opentitle
          frthCardDiscriptPlace.innerHTML = textuals.en.frthCard.openState.openDiscription
     }
     frthCardFooterPlace.innerHTML = textuals.en.frthCard.mainFooter
     frthCardFooterPlace.style.textAlign = 'left'
     document.querySelector('.blockquote').style.textAlign = 'left'
}else{
     if (est.getHours() > 17 || est.getDay() === 6 || est.getHours() < 6) {
          frthCardTitlePlace.innerHTML = textuals.ar.frthCard.closeState.closeTitle
          marketState.style.color = offColor
          frthCardDiscriptPlace.innerHTML = textuals.ar.frthCard.closeState.closeDiscription
     }else{
          frthCardTitlePlace.innerHTML = textuals.ar.frthCard.openState.opentitle
          frthCardDiscriptPlace.innerHTML = textuals.ar.frthCard.openState.openDiscription
     }
     frthCardFooterPlace.innerHTML = textuals.ar.frthCard.mainFooter
     frthCardFooterPlace.style.textAlign = 'right'
     document.querySelector('.blockquote').style.textAlign = 'right'
}




// tension/ circle size/ title/ x axis subtitle/ 
let pageWidth = document.body.scrollWidth;







// the general font of all the charts
Chart.defaults.font.family = "'Inknut Antiqua', 'Tomorrow'"

// the function that controls the charts where the data are undefined 
const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

// selects the canves where to imped the first chart
const dayChart = document.getElementById('hoursChart').getContext('2d');
const monthChart = document.getElementById('monthChart').getContext('2d');


let chart1 = new Chart(dayChart, {
     // specifies the type of the chart(whether a bar, pie, table or a line chart)
     type: 'line',
     
     // here we place our data 
     data: {
          labels: dayDataLabel,
          datasets: [{
               label: frstChartTitle,
               backgroundColor: '#8C7161aa',
               borderColor: '#8C7161',
               color: '#0d0d0d',
               data: dayDataPrice,
               
               pointRadius: 3.4,
               
               segment: {
                    borderColor: ctx => skipped(ctx, '#8C716188') || down(ctx, '#8C7161'),
                    borderDash: ctx => skipped(ctx, [6, 6]),
               },
               spanGaps: true,
               cubicInterpolationMode: 'monotone',
               
          }]
     },
     // here we place the some of the styling propereties
     options: {
          maintainAspectRatio: false,
          scales: {
               y: {
                    suggestedMin: Math.round(Math.min(...dayDataPrice)),
                    suggestedMax: Math.round(Math.max(...dayDataPrice)),
                    ticks: {
                         font: {
                              size: 12
                         }
                    }
               },
               x: {
                    beginAtZero: true,
                    grid: {
                         display: false
                    },
                    ticks: {
                         font: {
                              size: 10
                         }
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
let chart2 = new Chart(monthChart, {
     // specifies the type of the chart(whether a bar, pie, table or a line chart)
     type: 'line',
     
     // here we place our data 
     data: {
          labels: monthDataLabel,
          datasets: [{
               label: scndChartTitle,
               backgroundColor: '#8C7161aa',
               borderColor: '#8C7161',
               color: '#0d0d0d',
               data: monthDataPrice,
               
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
                    suggestedMin: Math.round(Math.min(...monthDataPrice)-1),
                    suggestedMax: Math.round(Math.max(...monthDataPrice)+1),
                    ticks: {
                         font: {
                              size: 12
                         }
                    }
               },
               x: {
                    beginAtZero: true,
                    grid: {
                         display: false
                    },
                    ticks: {
                         font: {
                              size: 10
                         }
                    }
               }
          },
          layout: {
               
          },
          responsive: true,
          
     }
})
// set values based on the page width for responsivity purposes
Chart.defaults.font.size = 12

console.log(pageWidth)
if (pageWidth < 600){
     Chart.defaults.font.size = 14
}
else if ( pageWidth < 1100){
     Chart.defaults.font.size = 16
}
else if ( pageWidth < 1400){
     Chart.defaults.font.size = 18
}
else {
     Chart.defaults.font.size = 21
     chart2.options.scales.x.grid.display = true
}
