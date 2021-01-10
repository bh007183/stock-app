


  


request('https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=bvqegnf48v6s3bgpr40g', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
  });

exports.request = request