require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World")
app.use('/public',express.static(__dirname+'/public'))
// app.get('/', (req,res) => {
//   res.sendFile(__dirname + '/views/index.html')
// })

// app.get('/json', (req,res) => {
//   const message = process.env.MESSAGE_STYLE == 'uppercase'
//   ? "HELLO JSON" : "Hello json";
//   console.log(message)

//   res.json({"message": message})
// })

app.use((req,res,next) => {
  const {method, ip, path} = req;
  console.log(`${method} ${path} - ${ip}`)
  next()
})




































 module.exports = app;
