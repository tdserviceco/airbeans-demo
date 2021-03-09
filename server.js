const express = require('express');
const beansRouter = require('./server/routes/beans');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors')
app.use(cors())
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/beans', beansRouter)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);