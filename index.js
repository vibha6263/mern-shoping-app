const express = require('express')
const product = require('./assets/products.json')
const app = express()

app.get('/', function (req, res) {
  res.send('hello')
})
app.get('/getProduct/', (req, res)=> {
  let cat=[];
  let vibha=product.filter((c)=>{
    if(c.category==="jewelery")
      cat.push(c);
  })
  res.send(cat);
})

app.listen(3000)
