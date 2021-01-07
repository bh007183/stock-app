// API Stocks TYZJSQ867Y6KODJJ
const storedTicker = JSON.parse(localStorage.getItem("ticker")) || []
///////////FUNCTION FOR DISPLAYING LOCALY STORED TICKERS. CALLED HERE AND WHEN SEARCH BUTTON PUSHED.///
dropdownTicker()
function dropdownTicker(){
for(let i = 0; i < storedTicker.length; i++){
    $(".past-ticker-search").prepend(
        $("<li>").append(
            $("<a>")
            .addClass("dropdown-item dropdown-ticker-history")
            .attr("href", "#")
            .text(storedTicker[i]),
            $("<hr>")  
        )
         
    )          
       
}
}
/////////FUNCTION FOR DISPLAYING LIVE FEED. CALLED HERE AND WHEN SEARCH BUTTON CLICKED///////////////////
live()
function live(){
const livePrice = new WebSocket("wss://ws.finnhub.io?token=bvqegnf48v6s3bgpr40g")
livePrice.addEventListener('open', function (event){
    livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': "AAPL"}))
    livePrice.send(JSON.stringify({'type':'subscribe', 'symbol': storedTicker[storedTicker.length -1]}))
})
livePrice.addEventListener('message', function (event) {
    const realTimeData = JSON.parse(event.data)
    $(".featured").text(realTimeData.data[0].p)
    for(var i = 0; i < realTimeData.data.length; i++)
    if(realTimeData.data[i].s === storedTicker[storedTicker.length -1]){
        $(".live-price").text(realTimeData.data[i].p)
    }
});
}
////////FUNCTION FOR DISPLAYING BASIC COMPANY INFO IN SEARCH BOX. CALLED HERE AND WHEN SEARCH BUTTON CLICKED///////////////
basicCompanyInfo()
function basicCompanyInfo(){
$.ajax({
    url:"https://finnhub.io/api/v1/stock/profile2?symbol=" + storedTicker[storedTicker.length -1] + "&token=bvqegnf48v6s3bgpr40g",
    method: "GET"
}).then(function(companyInfo){
    console.log(companyInfo)
    $(".name").text(companyInfo.name)
    $(".exchange").text(companyInfo.exchange)
    $(".ticker").text(companyInfo.ticker)
    
})
}

///////Functions For Clock In Upper Right Hand Corner////////
function doubleDidget(x){
    if(x < "10"){
        x = "0" + x
    } return x}
    var clock = setInterval(function(){
        let h = new Date().getHours()
        let m = new Date().getMinutes()
        let s = new Date().getSeconds()
        m = doubleDidget(m)
        s = doubleDidget(s)
        $(".clock").text(h + ":" + m + ":" + s)
    }, 1000)








////////Input Bar Local Storage/////////
$(".ticker-search-button").on("click", function(event){
const ticker = $(".ticker-search-input").val() 
if(ticker === ""){

}else{
storedTicker.push(ticker)
localStorage.setItem("ticker", JSON.stringify(storedTicker))
$(".past-ticker-search").empty()
dropdownTicker()
live()
basicCompanyInfo()
}

})
///////////////////////////////////////////////////////////
$(".dropdown-ticker-history").on("click", function(event){
    event.stopImmediatePropagation()
    const ticker = $(event.target).text() 
    console.log(ticker)
    storedTicker.push(ticker)
    localStorage.setItem("ticker", JSON.stringify(storedTicker))
    $(".past-ticker-search").empty()
    dropdownTicker()
    live()
    basicCompanyInfo()

})


$.ajax({
    method:"GET",
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FSLY&interval=5min&apikey=TYZJSQ867Y6KODJJ"
}).then(function(intraday){
    console.log(intraday)
})
// $.ajax({
//     method: "GET",
//     url:"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=compact&apikey=TYZJSQ867Y6KODJJ"
// }).then(function(dayily){
//     console.log(dayily)
// })

$.ajax({
    method: "GET",
    url: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=fastly&apikey=TYZJSQ867Y6KODJJ"
}).then(function(search){
    console.log(search)
})

$.ajax({
    method: "GET",
    url:"https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=30&from=1609459200&to=1609981597&token=bvqegnf48v6s3bgpr40g"
}).then(function (event){
    
 
    var options = {
        series: [{
        data: [{
            
          },
        ]
      }],
        chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      xaxis: {
        
        xaxis: {
            labels: {
              format: 'HH',
            }
          }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
      };

    for(let i = 0; i < event.t.length; i++){
        let date = event.t[i]
        let price = [event.o[i], event.h[i], event.l[i], event.c[i]]
     options.series[0].data[i] = {x: new Date(date), y: price}
     
    console.log(options)
    
   
    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  
})







  

  
  
    // console.log(options.series[0].data[0].x)
    // console.log(options.series[0].data[0].y)

