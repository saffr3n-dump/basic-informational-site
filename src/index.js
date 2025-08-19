import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 3000;

http
  .createServer(async (req, res) => {
    let page;
    let status = 200;

    try {
      switch (req.url) {
        case '/':
          page = await readPage('index.html');
          break;
        case '/about':
          page = await readPage('about.html');
          break;
        case '/contact':
          page = await readPage('contact.html');
          break;
        default:
          page = await readPage('404.html');
          status = 404;
      }
    } catch (err) {
      console.error(err);
    }

    res.writeHead(status, { 'content-type': 'text/html' });
    res.end(page);
  })
  .listen(PORT, () => console.log(`Server started on port ${PORT}`));

function readPage(filename) {
  return fs.readFile(
    path.resolve(import.meta.dirname, '..', 'public', filename),
    { encoding: 'utf8' },
  );
}
