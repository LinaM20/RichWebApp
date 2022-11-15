const { fromEvent } = rxjs;

let button = document.getElementById('start-button');
let hourInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let mySeconds = hourInput.value;

rxjs.fromEvent(button, 'click')
.subscribe(() => showTimer());

function tick() {
    
}

function showTimer() {
    console.log("hours" + hourInput.value);
    let div = document.createElement('div');
    div.innerHTML = "the hour is " + hourInput.value;
    document.body.appendChild(div);

    let intervalHandler = setInterval(tick, 1000);
    
}





