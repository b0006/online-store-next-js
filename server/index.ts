import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const port = parseInt(process.env.PORT || '', 10) || 3000;
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });
