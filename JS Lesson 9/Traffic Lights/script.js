// FORK THIS PEN

// 1. Wire up the buttons to the lights

const redLight = document.getElementById("stop")
const orangeLight = document.getElementById("caution")
const greenLight = document.getElementById("go")
const lights = document.getElementsByClassName("light")



console.log(redLight);
console.log(lights);


redLight.addEventListener("click", () => { 
    lights[0].classList.toggle("on")
});
orangeLight.addEventListener("click", () => {
    lights[1].classList.toggle("on")
});

greenLight.addEventListener("click", () => {
    lights[2].classList.toggle("on")
});

lights[0].addEventListener("mouseover",() => {
    lights[0].classList.add("on")
})
lights[0].addEventListener("mouseout",() => {
    lights[0].classList.remove("on")
})
lights[1].addEventListener("mouseover",() => {
    lights[1].classList.add("on")
})
lights[1].addEventListener("mouseout",() => {
    lights[1].classList.remove("on")
})
lights[2].addEventListener("mouseover",() => {
    lights[2].classList.add("on")
})
lights[2].addEventListener("mouseout",() => {
    lights[2].classList.remove("on")
})



// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

// const { log } = console;

// const stopButton = document.getElementById('stop');
// const stopLight = document.querySelector('.light.stop');

// stopButton.addEventListener('click', (e) => {
//   log('evt ibj', e);
//   stopLight.classList.add('on');
// });



