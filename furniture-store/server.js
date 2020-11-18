

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

// app.get('/', function (request, response) {
//     response.send("Server is up and running smoothly")
// })

app.get('/priceCheck/:name', function (request, response) {
    const name = request.params.name
    const item = store.find(s => s.name==name)
    if (item){
        response.send(`${item.price}`)
    }else{
        response.send(`${null}`)
    }
})

app.get('/buy/:name', function (request, response) {
    const name = request.params.name
    const item = store.find(s => s.name==name)
    console.log(item)
    if (item){
        item.inventory = item.inventory -1
        response.send(item)
    }else{
        response.send(`${null}`)
    }
})
