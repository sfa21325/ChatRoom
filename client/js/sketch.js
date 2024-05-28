var playernum;
var playername;
function preload() {

}

function setup() {
    playernum = new Player("UntitledLoser2010");
    createCanvas(windowWidth, windowHeight);
    playername = document.getElementById("playername");
}

function draw() {
    background(200);
    playernum.draw();
    createP(playername);
}

var Player = function(name) {
    this.name = name

    this.draw = function() {
        square(100, 100, 100);
    }

    return this;
}