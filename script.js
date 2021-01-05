// API Stocks TYZJSQ867Y6KODJJ

var AAPL = new WebSocket("wss://ws.finnhub.io?token=bvqegnf48v6s3bgpr40g")
AAPL.addEventListener('open', function (event){
    AAPL.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
})
AAPL.addEventListener('message', function (event) {
    var realTimeData = JSON.parse(event.data)
    $(".featured").text(realTimeData.data[0].p + "|" + realTimeData.data[0].s)
    
    
});


///////Functions For Clock In Upper Right Hand Corner////////
function doubleDidget(x){
if(x < "10"){
    x = "0" + x
} return x}
var clock = setInterval(function(){
    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()
    m = doubleDidget(m)
    s = doubleDidget(s)
    $(".clock").text(h + ":" + m + ":" + s)
}, 1000)

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