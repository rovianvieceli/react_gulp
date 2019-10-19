const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));
app.use('/api', require('./src/routes.jsx'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listen on http://localhost:3000`);
});
