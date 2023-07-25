const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express();

const PORT = process.env.PORT || 50985;

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});