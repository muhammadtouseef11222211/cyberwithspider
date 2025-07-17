const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('It will not run until owner give deploy permission');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

