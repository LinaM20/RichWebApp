const { fromEvent } = rxjs;

let button = document.getElementById('start-button');
let hourInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
const form = html
    '<div><p>HEllo</p></div>';
const click = fromEvent(button, 'click')
click.subscribe(() => {
    console.log("Hour: " + hourInput.value);
    console.log("Minutes: " + minutesInput.value);
    console.log("Seconds: " + secondsInput.value);
    form;
}); 






