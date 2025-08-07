// server.js
const express = require('express');
const app = express();
app.use(express.json());

let bestScore = 0;

app.get('/best', (req, res) => {
  res.json({ best: bestScore });
});

app.post('/best', (req, res) => {
  const { score } = req.body;
  if (typeof score === 'number' && score > bestScore) {
    bestScore = score;
  }
  res.json({ best: bestScore });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버 실행 중: http://localhost:${PORT}`));
