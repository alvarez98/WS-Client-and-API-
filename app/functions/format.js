const format = (res)=>{
    text = res.split('#')
    return {
        'Last valid input': text[0],
        'Temperature': text[1],
        'Humidity': text[2]
    }
}

module.exports = format