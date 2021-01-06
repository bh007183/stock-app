// API Stocks TYZJSQ867Y6KODJJ

var storedTicker = JSON.parse(localStorage.getItem("ticker")) || []
///////////FUNCTION FOR DISPLAYING LOCALY STORED TICKERS. CALLED HERE AND WHEN SEARCH BUTTON PUSHED.///
dropdownTicker()
function dropdownTicker(){
for(var i = 0; i < storedTicker.length; i++){
    $(".past-ticker-search").append(
        $("<li>").prepend(
            $("<a>")
            .addClass("dropdown-item dropdown-ticker-history")
            .attr("href", "#")
            .text(storedTicker[i])
        )
    )                
}
}

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



var AAPL = new WebSocket("wss://ws.finnhub.io?token=bvqegnf48v6s3bgpr40g")
AAPL.addEventListener('open', function (event){
    AAPL.send(JSON.stringify({'type':'subscribe', 'symbol': "AAPL"}))
})
AAPL.addEventListener('message', function (event) {
    var realTimeData = JSON.parse(event.data)
    $(".featured").text(realTimeData.data[0].p + "|" + realTimeData.data[0].s)
    
    
});




////////Input Bar Local Storage/////////
$(".ticker-search-button").on("click", function(event){
var ticker = $(".ticker-search-input").val() 
storedTicker.push(ticker)
localStorage.setItem("ticker", JSON.stringify(storedTicker))
$(".past-ticker-search").empty()
dropdownTicker()
})
///////////////////////////////////////////////////////////


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
