var song_lav = "";
var song_atc = "";

function preload() {
    song_lav = loadSound("I'm So Tired (ft. Justin Beiber).mp3")
    song_atc = loadSound("Legends Never Die (ft. Against The Current) _ Worlds 2017 - League of Legends (320 kbps).mp3")
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);
}
