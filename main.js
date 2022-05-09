var song_lav = ""; // 1st song
var song_atc = ""; // 2nd song
var leftWristX = 0;
var rightWristX = 0;
var leftWristY = 0;
var rightWristY = 0;
var scoreLeft = 0;
var scoreRight = 0;
var songStatus_lav = "";
var songStatus_atc = "";

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

    fill("yellow");
    stroke("yellow");
    circle(rightWristX, rightWristY, 20);

    if (scoreLeft > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song_atc.stop();

        if (songStatus_lav = false) {
            song_lav.play();
            document.getElementById("song_name").innerHTML = "I'm So Tired";
        }
    }

    if (scoreLeft > 0.5) {
        if (!song_lav.isPlaying()) {
            song_lav.play();
            songStatus_lav = "I'm So Tired is playing!";
        }
    }

    if (scoreRight > 0.5) {
        if(!song_atc.isPlaying()) {
            song_atc.play();
            songStatus_atc = "Legends Never Die is playing!";
        }
    }
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
        scoreLeft = results[0].pose.keypoints[9].score;
        scoreRight = results[0].pose.keypoints[10].score;
    }
}
