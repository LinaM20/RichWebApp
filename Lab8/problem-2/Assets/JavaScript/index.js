const { fromEvent } = rxjs;

document.getElementById('display-timer').style.display = 'none';

let button = document.getElementById('start-button');

let hourInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

let countHours = 0;
let countMinutes = 0;
let countSeconds = 0;
let startCount = 0;

rxjs.fromEvent(button, 'click')
.subscribe(() => startTimer());

function startTimer() {
    if(startCount == 0 && document.getElementById('hours') && document.getElementById('minutes') && document.getElementById('seconds')) {
        countHours = parseInt(document.getElementById('hours').value) + 0;
        countMinutes = parseInt(document.getElementById('minutes').value) + 0;
        countSeconds = parseInt(document.getElementById('seconds').value) * 1;
        if(isNaN(countHours)) countHours = 0;
        if(isNaN(countMinutes)) countMinutes = 0;
        if(isNaN(countSeconds)) countSeconds = 0;
        
        document.getElementById('hours').value = countHours;
        document.getElementById('minutes').value = countMinutes;
        document.getElementById('seconds').value = countSeconds;
            
        startCount = 1;
        document.getElementById('start-button').setAttribute('disabled', 'disabled');
        document.getElementById('display-timer').style.display = 'block';

    
    }
    if(countHours == 0 && countMinutes == 0 && countSeconds == 0) {
        startCount = 0;
        document.getElementById('start-button').removeAttribute('disabled');
        return false;
    }
    else {
        countSeconds--;

        if(countSeconds < 0) {
          if(countMinutes > 0) {
                countSeconds = 59;
                countMinutes--;
                if(countHours > 0) {
                    countHours--;
                }
            }
            else {
                countSeconds = 0;
                countMinutes = 0;
                countHours = 0;
            }
        }
    }


    document.getElementById('displayHours').innerHTML = countHours;
    document.getElementById('displayMinutes').innerHTML = countMinutes;
    document.getElementById('displaySeconds').innerHTML = countSeconds;

    setTimeout('startTimer()', 1000);

}