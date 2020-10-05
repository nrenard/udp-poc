import dgram from 'dgram';

import IEnv from '../dtos/IEnv';

export const server = dgram.createSocket('udp4');

const { PORT, HOST }: IEnv = process.env;

export default () => {
  server.on('listening', function() {
    const address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
  });

  server.bind(PORT, HOST);

  return server;
}