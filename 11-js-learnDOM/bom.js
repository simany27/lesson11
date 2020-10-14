window.open('https://www.tel-ran.com/');
open('tel-ran.com');
alert('Hello from DOM');
let name = prompt('Enter your name');
alert(name);
let checker = confirm('Are you older than 18?');
alert(checker);

console.log(navigator.userAgent);
console.log(navigator.platform);
navigator.geolocation.getCurrentPosition(p => console.log(p.coords.latitude, p.coords.longitude));
console.log(location.origin);






