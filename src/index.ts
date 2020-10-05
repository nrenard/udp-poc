import server from './server';

server.listen(3000);

process.on('SIGTERM', () => {
  console.log('Closing server.');
  process.exit(0);
});