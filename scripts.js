// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    
const background = document.getElementById("shuttleBackground");

const takeoffButton = document.getElementById("takeoff");
takeoffButton.addEventListener("click", function() {
    const confirmation = confirm('Confirm that the shuttle is ready for takeoff.');
    if (confirmation) {
        // The flight status should change to "Shuttle in flight."
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
        background.style.backgroundColor = 'blue';
        // The shuttle height should increase by 10,000 miles.
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let numberedShuttleHeight = Number(shuttleHeight.innerHTML);
        numberedShuttleHeight += 10000;
        shuttleHeight.innerHTML = numberedShuttleHeight;
    }
});

const landButton = document.getElementById("landing");
landButton.addEventListener("click", function() {
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    background.style.backgroundColor = 'green';
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
});

const abortButton = document.getElementById("missionAbort");
abortButton.addEventListener("click", function() {
    const confirmation = confirm('Confirm that you want to abort the mission.');
    if (confirmation) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        background.style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
});

const rocketImage = document.getElementById("rocket");

const upButton = document.getElementById("up");
upButton.addEventListener("click", function() {
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let numberedShuttleHeight = Number(shuttleHeight.innerHTML);
    numberedShuttleHeight += 10000;
    shuttleHeight.innerHTML = numberedShuttleHeight;
    let currentPosition = parseInt(rocketImage.style.top) || 0;
    rocketImage.style.top = (currentPosition - 10) + 'px';
});

const downButton = document.getElementById("down");
downButton.addEventListener("click", function() {
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let numberedShuttleHeight = Number(shuttleHeight.innerHTML);
    numberedShuttleHeight -= 10000;
    shuttleHeight.innerHTML = numberedShuttleHeight;
    let currentPosition = parseInt(rocketImage.style.top) || 0;
    rocketImage.style.top = (currentPosition + 10) + 'px';
});

const leftButton = document.getElementById("left");
leftButton.addEventListener("click", function() {
    let currentPosition = parseInt(rocketImage.style.left) || 0;
    rocketImage.style.left = (currentPosition - 10) + 'px';
});

const rightButton = document.getElementById("right");
rightButton.addEventListener("click", function() {
    let currentPosition = parseInt(rocketImage.style.left) || 0;
    rocketImage.style.left = (currentPosition + 10) + 'px';
});

});