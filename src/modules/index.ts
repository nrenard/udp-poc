import './client';
import server from './server';

export default (UDPServer:any) => {
  server(UDPServer);
}