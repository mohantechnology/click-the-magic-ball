const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8050;
const staticDir = path.join(__dirname);

app.use(express.static(staticDir, { dotfiles: 'deny' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Magic Ball server running at http://localhost:${PORT}`);
});
