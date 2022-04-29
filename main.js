var song_lav = "";
var song_atc = "";
var leftWristX = 0;
var rightWristX = 0;
var leftWristY = 0;
var rightWristY = 0;

function preload() {
    song_lav = loadSound("I'm So Tired (ft. Justin Beiber).mp3")
    song_atc = loadSound("Legends Never Die (ft. Against The Current) _ Worlds 2017 - League of Legends (320 kbps).mp3")
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function modelLoaded() {
    console.log("Model is Loaded.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
