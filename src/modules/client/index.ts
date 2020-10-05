import dgram from 'dgram';

import IEnv from '../../dtos/IEnv';

const { PORT, HOST }: IEnv = process.env;

const message = new Buffer('Hello World!');

var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;

  console.log('UDP message sent to ' + HOST +':'+ PORT);
  
  client.close();
});