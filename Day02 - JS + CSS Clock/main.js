const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

setInterval(function (){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsInDegrees = ((seconds / 60) * 360);

    secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;

    const mins = now.getMinutes();
    const minsInDegrees = ((mins / 60) * 360);

    minsHand.style.transform = `rotate(${minsInDegrees}deg)`;

    const hours = now.getHours();
    const hoursInDegrees = ((hours / 12) * 360);

    hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}, 1000);
