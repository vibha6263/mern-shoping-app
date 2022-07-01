 require('./config/config')
require('./models/db') 
 const express = require('express')
 const routes= require('./routes/index.router');
 const app = express();
 app.use(express.json())
 app.use('/api',routes);

 app.listen(process.env.PORT)


// const express = require("express");

//app.get("/", (req, res) => {
	//res.send("Hello World");
//});

//app.get("/products", (req, res) => {
//	res.send(products);
//});
//app.listen(3000)

