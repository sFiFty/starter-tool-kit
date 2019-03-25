const favicon = require('serve-favicon');
const path = require('path');

export const api = (server: any) => {
  server.get('/robots.txt', (_req: any, res: any) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  });

  server.get('/sitemap.xml', (_req: any, res: any) => {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, '../static', 'sitemap.xml'))
  });

  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));
}