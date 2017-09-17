var http     = require('http')
  , httpServ = http.createServer((request,response) => {

    response.writeHead(200);

    response.write('Server Running');

    response.end();

  })
  , mosca    = require('mosca')
  , mqttServ = new mosca.Server({});

mqttServ.attachHttpServer(httpServ);

var port = process.env.PORT || 3000;
httpServ.listen(port,(res) => {
   console.log('Server listening on port ' + httpServ.address().port);
});
