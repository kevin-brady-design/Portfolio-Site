console.log("Welcome to Kevin's portfolio.")

function menuToggle() {
var x = document.getElementById('myNavtoggle');
if (x.className === 'navtoggle') {
x.className += ' responsive';
} else {
x.className = 'navtoggle';
}
}
