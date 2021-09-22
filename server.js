import express  from 'express';
import http  from 'http';

const app = express();
const port = 8888;
const staticRoot = '.';

app.use(express.static(staticRoot, {
  etag: true,
  lastModified: true,
  setHeaders(res, path) {

    res.setHeader('Cross-Origin-Opener-Policy','same-origin' );
    res.setHeader('Cross-Origin-Embedder-Policy','require-corp' );
  }
}));
 
const server = http.createServer(app).listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});