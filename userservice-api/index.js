const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name:'Bob',email:"fasssdsdsds@gmail.com"
},{
    name:'sdsd',email:"asasas@gmail.com"
},{
    name:'sd',email:"sds@gmail.com"
}]))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})