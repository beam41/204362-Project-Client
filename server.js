const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const compression = require('compression');

app = express();
app.use(compression());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
