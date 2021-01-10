let request = require('./news');
const fs = require("fs")

// API Stocks TYZJSQ867Y6KODJJ
// const storedTicker = JSON.parse(localStorage.getItem("ticker")) || []
///////////FUNCTION FOR DISPLAYING LOCALY STORED TICKERS. CALLED HERE AND WHEN SEARCH BUTTON PUSHED.///
// dropdownTicker()
// function dropdownTicker(){
// for(let i = 0; i < storedTicker.length; i++){
//     $(".past-ticker-search").prepend(
//         $("<li>").append(
//             $("<a>")
//             .addClass("dropdown-item dropdown-ticker-history")
//             .attr("href", "#")
//             .text(storedTicker[i]),
//             $("<hr>")  
//         )
         
//     )          
       
// }
// }
/////////FUNCTION FOR DISPLAYING LIVE FEED. CALLED HERE AND WHEN SEARCH BUTTON CLICKED///////////////////
// live()
// function live(){
// const livePrice = new WebSocket("wss://ws.finnhub.io?token=bvqegnf48v6s3bgpr40g")
// livePrice.addEventListener('open', function (event){
//     livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': "AAPL"}))
//     livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': "MSFT"}))
//     livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': "GOOGL"}))
//     livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': "AMZN"}))
//     livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': storedTicker[storedTicker.length -1]}))
// })
// livePrice.addEventListener('message', function (event) {
//     const realTimeData = JSON.parse(event.data)
//     for (let i = 0; i < realTimeData.data.length; i++){
//         if(realTimeData.data[i].s === "AAPL"){
//             $(".featured1").text(realTimeData.data[i].p)
//         }
//         if(realTimeData.data[i].s === "MSFT"){
//             $(".featured2").text(realTimeData.data[i].p)
//         }
//         if(realTimeData.data[i].s === "GOOGL"){
//             $(".featured3").text(realTimeData.data[i].p)
//         }
//         if(realTimeData.data[i].s === "AMZN"){
//             $(".featured4").text(realTimeData.data[i].p)
//         }
//     }
//     for(var i = 0; i < realTimeData.data.length; i++)
//     if(realTimeData.data[i].s === storedTicker[storedTicker.length -1]){
//         $(".live-price").text(realTimeData.data[i].p)
//     }
// });
// }
////////FUNCTION FOR DISPLAYING BASIC COMPANY INFO IN SEARCH BOX. CALLED HERE AND WHEN SEARCH BUTTON CLICKED///////////////
// basicCompanyInfo()
// function basicCompanyInfo(){
// $.ajax({
//     url:"https://finnhub.io/api/v1/stock/profile2?symbol=" + storedTicker[storedTicker.length -1] + "&token=bvqegnf48v6s3bgpr40g",
//     method: "GET"
// }).then(function(companyInfo){
//     console.log(companyInfo)
//     $(".name").text(companyInfo.name)
//     $(".exchange").text(companyInfo.exchange)
//     $(".ticker").text(companyInfo.ticker)
    
// })
// }

///////Functions For Clock In Upper Right Hand Corner////////
// function doubleDidget(x){
//     if(x < "10"){
//         x = "0" + x
//     } return x}
//     var clock = setInterval(function(){
//         let h = new Date().getHours()
//         let m = new Date().getMinutes()
//         let s = new Date().getSeconds()
//         m = doubleDidget(m)
//         s = doubleDidget(s)
//         $(".clock").text(h + ":" + m + ":" + s)
//     }, 1000)








////////Input Bar Local Storage/////////
// $(".ticker-search-button").on("click", function(event){
// const ticker = $(".ticker-search-input").val() 
// if(ticker === ""){

// }else{
// storedTicker.push(ticker)
// localStorage.setItem("ticker", JSON.stringify(storedTicker))
// $(".past-ticker-search").empty()
// dropdownTicker()
// live()
// basicCompanyInfo()
// }

// })
// ///////////////////////////////////////////////////////////
// $(".dropdown-ticker-history").on("click", function(event){
//     event.stopImmediatePropagation()
//     const ticker = $(event.target).text() 
//     console.log(ticker)
//     storedTicker.push(ticker)
//     localStorage.setItem("ticker", JSON.stringify(storedTicker))
//     $(".past-ticker-search").empty()
//     dropdownTicker()
//     live() 
//     basicCompanyInfo()

// })



// $.ajax({
//     method: "GET",
//     url: "https://finnhub.io/api/v1/company-news?symbol=" + storedTicker[storedTicker.length -1] + "&from=2021-01-01&to=2021-01-05&token=bvqegnf48v6s3bgpr40g",
// }).then(function(news){
//     for(let i = 0; i < 6; i++ ){
//         $(".news")
//         .append($("<div>")
//         .addClass("col-5 card newsspace")
//         .append($("<div>").text((news[i].source).toUpperCase()).addClass("source"))
//         .append($("<a>").attr("href", news[i].url).addClass(".news-image-container").attr("target", "_blank").append($("<img>").attr("src", news[i].image).css("max-height", "15vw").css("max-width", "10vw")))
//         .append($("<p>").text(news[i].headline))
//         )
        

//     }
// })




// setInterval(() => {
// let currentTime = Date.now()
// currentTime = currentTime.toString()
// currentTime = currentTime.slice(0, -3)
// currentTime = parseInt(currentTime)
// console.log(currentTime)

// let lastDay24 = currentTime - 86400
// console.log(storedTicker[storedTicker.length -1])
// $.ajax({
//     method: "GET",
//     url:"https://finnhub.io/api/v1/stock/candle?symbol=" + storedTicker[storedTicker.length -1] + "&resolution=1&from=" + lastDay24 + "&to="+ currentTime + "&token=bvqegnf48v6s3bgpr40g"
// }).then(function (event){
//     $("#chart").empty();
//     var options = {
//         series: [{
//         data: [{
            
//           },
//         ]
//       }],
//         chart: {
//         type: 'candlestick',
//         height: 350
//       },
//       title: {
//         text: storedTicker[storedTicker.length -1] + ' / CandleStick Chart / Last 24 HR',
//         align: 'left'
//       },
//       xaxis: {
//             type: 'datetime',
//             axisBorder: {
//               offsetX: 13
//             }    
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true
//         }
//       }
//       };

//     for(let i = 0; i < event.t.length; i++){
//         let date = event.t[i] * 1000
//         let price = [event.o[i], event.h[i], event.l[i], event.c[i]]
//      options.series[0].data[i] = {x: new Date(date), y: price}
     
//     console.log(options)
    
   
//     }
//     var chart = new ApexCharts(document.querySelector("#chart"), options);
//     chart.render();
  
// })


// }, 10000)


console.log(request.body)
