const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');

const cors = require('cors');




//Un middleware
app.use(bodyParser.json());
//restriction de l'API
app.use(cors({}))
app.use('/posts', postsRoutes);

app.listen(5500, () => {console.log("Server started : 5500")});