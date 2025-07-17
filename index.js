const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Code deployment in Docker test 7');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

