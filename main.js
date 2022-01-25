noseX=0;
noseY=0;
function preload(){

clown_image = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");

}

function setup(){

    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);

}

function modelLoaded(){

    console.log("PoseNet is initialized");

}

function getPoses(results){

    if(results.length>0){

        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;

    }

}

function draw(){

    image(video,0,0,400,400);
    image(clown_image, noseX, noseY, 30, 30);

}

function takeSnapshot(){

    save("FilteredImg.png");

}