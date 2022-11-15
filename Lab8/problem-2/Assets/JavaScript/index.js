const { fromEvent } = rxjs;

//setting the countdown to be not visibile until the timer begins
document.getElementById('display-timer').style.display = 'none';

//creating DOM elements
let button = document.getElementById('start-button');
let hourInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

//variables
let countHours = 0;
let countMinutes = 0;
let countSeconds = 0;
let startCount = 0;

//rxjs click event
rxjs.fromEvent(button, 'click')
.subscribe(() => startTimer());

//timer function
function startTimer() {
    if(startCount == 0 && document.getElementById('hours') && document.getElementById('minutes') && document.getElementById('seconds')) {
        //parsing the numbers
        countHours = parseInt(document.getElementById('hours').value);
        countMinutes = parseInt(document.getElementById('minutes').value);
        countSeconds = parseInt(document.getElementById('seconds').value);

        //checks if the inputs are actually numbers, otherwise 0 is returned
        if(isNaN(countHours)) {
            countHours = 0;
        }
        if(isNaN(countMinutes)) {
            countMinutes = 0;
        } 
        if(isNaN(countSeconds)) {
            countSeconds = 0;
        }
            
        //starts the counter
        startCount = 1;

        //disables the button after the click event happened
        document.getElementById('start-button').setAttribute('disabled', 'disabled');

        //displays the timer now that the button has been clicked
        document.getElementById('display-timer').style.display = 'block';

    
    }
    //if the hours, minutes and seconds are 0 then the button is enabled
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
                if (countHours > 0) {
                
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
        
    //puts the input numbers in the countdown div area
    document.getElementById('displayHours').innerHTML = countHours;
    document.getElementById('displayMinutes').innerHTML = countMinutes;
    document.getElementById('displaySeconds').innerHTML = countSeconds;

    //starts the timer with an interval of 1 second
    setTimeout('startTimer()', 1000);

}