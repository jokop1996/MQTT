var http     = require('http')
  , httpServ = http.createServer(function(request,response) {

    console.log("Server is Running");

  })
  , mosca    = require('mosca')
  , mqttServ = new mosca.Server({});

mqttServ.attachHttpServer(httpServ);

var port = process.env.PORT || 3000;
httpServ.listen(port,function() {
   console.log('Server listening on port ' + httpServ.address().port);
});
