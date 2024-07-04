const app = require('./app');

const PORT = process.env.PROXY_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});