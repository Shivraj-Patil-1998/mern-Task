const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const db = require('./database/db');

app.use(express.json())
require('dotenv').config();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(db)
app.use('/user',require('./routes/userDataRoutes'))
app.use('/usrauth', require('./routes/userRegisterRoute'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)  
})  