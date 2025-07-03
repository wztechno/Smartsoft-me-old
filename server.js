const https = require('https');
const fs = require('fs');
const next = require('next');

const dev = !(process.argv.includes('--prod') || process.env.NODE_ENV === 'production');
process.env.NODE_ENV = !dev ? 'production' : 'development';

const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./ssl/private.key'),
  cert: fs.readFileSync('./ssl/certificate.crt'),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on https://localhost:3000');
    });
});
