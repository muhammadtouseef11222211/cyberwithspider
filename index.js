const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('deploy test using jenkins and webhook');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

