var menuToggle = document.querySelector('[data-js="menu-toggle"]');

// Remove this setInterval to trigger the open/close manually through the UI
//var interval = setInterval(function() {
//  menuToggle.click();
//}, 2000);

// Clear the interval on any click
//document.body.addEventListener('click', function() {
// clearInterval(interval);
//});

menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('panel-open');
    menuToggle.classList.toggle('open');
    CloseMenu.classList.remove('hide');
});

var closePanel = document.querySelector('[data-js="hidden-panel-close"]');
var CloseMenu = document.getElementById("CloseMenu");

closePanel.addEventListener('click', function() {
    document.body.classList.remove('panel-open');
    menuToggle.classList.remove('open');
    CloseMenu.classList.add('hide');
});

function Closemypanel() {
    document.body.classList.remove('panel-open');
    menuToggle.classList.remove('open');
    CloseMenu.classList.add('hide');
}
var OrderBolt = document.getElementById("OrderBolt")
var OrderBtn = document.getElementById("OrderBtn")

var OrderBolt2 = document.getElementById("OrderBolt2")
var OrderBtn2 = document.getElementById("OrderBtn2")

function Yellowgreen(x) {
    OrderBolt.style.color = "yellowgreen";
}


function Blacken(x) {
    OrderBolt.style.color = "black";
}

function Yellowgreen2(x) {
    OrderBolt2.style.color = "yellowgreen";
}


function Blacken2(x) {
    OrderBolt2.style.color = "black";
}