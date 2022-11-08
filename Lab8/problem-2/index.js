const { fromEvent } = rxjs;

var button = document.getElementById('start-button');
const click = fromEvent(button, 'click')
click.subscribe(() => console.log('click'));