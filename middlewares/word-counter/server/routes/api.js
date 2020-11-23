
const express = require('express')
const router = express.Router()

const count = {numOfWords: 0}

router.get('/sanity', function (request, response) {
    console.log("reached the server")
    response.send(count)
})

router.post('/sanity', function (request, response) {
    console.log("reached the server")
   const numOldWords = count.numOfWords
   const words = request.body.text.split(" ")
   console.log(words)
   for(word of words){
       if(count[word] == undefined){
        count[word] = 1
        count.numOfWords+=1
       }else{
        count[word] += 1
       }
    
   }
   const numNewWords = count.numOfWords - numOldWords
   const result = {text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: count.numOfWords}
    console.log(count)
    response.send(result)
})

router.get('/word/:word', function (request, response) {
    console.log("reached the server")
    if(count[request.params.word]){
        response.send({count: count[request.params.word]})
    }else{
        response.send({count: 0})
    }
    
})

router.post('/word', function (request, response) {
    console.log("reached the server")
   const word = request.body.text
       if(count[word] == undefined){
        count[word] = 1
       }else{
        count[word] += 1
       }
       const result = {text: word, currentCount: count[word] }
    console.log(count)
    response.send(result)
})

module.exports = router