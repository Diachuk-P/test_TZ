var valueSpectators = document.getElementById('spectators');
var randomSpectators = Math.floor(Math.random()*1000);
var test = valueSpectators.innerHTML = randomSpectators;
function getRandomNumber(){
    return Math.floor(Math.random() * (130-110+1))+ 130;
}

randomSpectators = getRandomNumber()

// valueSpectators.innerHTML = randomSpectators
// const interval = setInterval(function(){
//     if (valueSpectators >= 140){
//         clearInterval(interval)
//     }
//     else{
//         valueSpectators.innerHTML = randomSpectators++
//     }
// }, 1000);



$(window).scroll(function(){
    if ($(window).scrollTop() > 1230) {
        $('.logo').addClass('hide');
    }
    else {
        $('.logo').removeClass('hide');
    }
});