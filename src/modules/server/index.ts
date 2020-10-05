export default (server:any) => {
  server.on('message', function(message: any, remote: any) {
    console.log(`server received: ${message}`);
  });
};