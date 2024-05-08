const express = require('express');
const app = express();
const connectToDatabase = require('./config/mongoose');

const productRoute = require('./routes/product.route');

connectToDatabase();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', function (req, res) {
    res.send('Hello World!');
});

app.use('/api/products', productRoute);
