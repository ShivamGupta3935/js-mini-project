
const randomColor = function(){
    const hexVal = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hexVal[Math.floor(Math.random() * 16)]
    }
    return color;
}

const start = document.getElementById('start')
const stop = document.getElementById('stop')

let intervalId;
start.addEventListener('click',function () {
    if (!intervalId) {
       intervalId = setInterval(bgColor,1000)
    }

    function bgColor(){
        document.body.style.backgroundColor = randomColor()
    }
})

stop.addEventListener('click',function(){
   clearInterval(intervalId)
   intervalId = null
})