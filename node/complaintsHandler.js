
const consts = require('./consts')
const handleComplaints =function(complaint){

    let result = ''
    if(complaint.text == consts.FINANCE){
        result = "Money doesn't grow on trees, you know."
    }else if(complaint.text == consts.WEATHER){
        result = "It is the way of nature. Not much to be done."
    }else if(complaint.text == consts.EMOTIONS){
        result = "It'll pass, as all things do, with time."
    }
}

module.exports.handleComplaints