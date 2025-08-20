import express from 'express';
import path from 'path';

const app = express();
const publicDir = path.resolve(import.meta.dirname, '../public');

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: publicDir });
});
app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: publicDir });
});
app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: publicDir });
});
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: publicDir });
});

const PORT = 3000;
app.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server started on port ${PORT}`);
});
