const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect
    (process.env.MONGODB_URI || 'mongodb://localhost/sociaNetwork', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
);

mongoose.set('debug', process.env.NODE_ENV !== 'production');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.set('debug', true);
app.listen(PORT, () => console.log(`Connect to localhost:${PORT}`))