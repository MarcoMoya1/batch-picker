console.log('Howdy!')
// let btn = document.querySelector('button');

var randomPicker = Math.floor(Math.random() * 4) + 1;

function getRandomPicker() {
    alert(randomPicker);
};

new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

function displayDate() {
    document.getElementById("showDate").innerHTML = 
    Date();
}
