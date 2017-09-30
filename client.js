var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com:1883')

client.on('connect', function () {
   //client.subscribe('testing')
   console.log("client is online");
  var data = {
  	'id_healbox' : 1235,
  	'id_reminder' : '245',
  	'data' : 'led1'
  }

  var data1 = {
  	'id_healbox' : 1235,
  	'id_reminder' : '1',
  	'data' : 'J'
  }
  client.publish('/joko/inTopic', JSON.stringify(data))
  //client.publish('/joko/inTopic2', JSON.stringify(data1))
})

client.subscribe('/joko/outTopic');
//client.subscribe('/joko/outTopic2');

//client.subscribe('outTopic')
client.on('message', function (topic, message) {
  // message is Buffer
  var data = message.toString();
  console.log(data)
  // client.end()
})


/*** client on error ***/
client.on("error", function(err) {
  console.log("error from client --> ", err);
})

/*** client on close ***/
client.on("close", function() {
    console.log("cleint is closed");
  })
  /*** client on offline ***/
client.on("offline", function(err) {
  console.log("client is offline");
});

/*** client on reconnect ***/
client.on("reconnect", function() {
  console.log("cleint is reconnected");
})
