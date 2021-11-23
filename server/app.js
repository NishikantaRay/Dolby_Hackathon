const express = require('express');
const { port } = require('./configs/env.config');
const booking = require('./routes/hotel');
const app = express();
const dbconn = require('./configs/db.conn');

app.use(express.json());
app.use('/hotel', booking);

dbconn();

app.get('/', (req, res) => {
    res.status(200).json({
        message : 'Hello from JCoders'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});