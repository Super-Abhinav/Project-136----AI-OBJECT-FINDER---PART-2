Status = "";

function setup() {
    canvas = createCanvas(450,400);
    canvas.center();
    canvas.position(620,330);

    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects Detecting";

    object_name = document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
}

function draw() {
    image(video, 0, 0, 450, 400);
}