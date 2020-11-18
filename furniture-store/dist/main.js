

const findPrice = function(){
    const name = $('.find').val()

$.get(`priceCheck/${name}`, function(price){
    $('body').append(`<div>price is: ${price}</div>`)
})

}

const buy = function(){
    const name = $('.buy').val()

$.get(`buy/${name}`, function(item){
    $('body').append(`<div>Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store</div>`)
})

}