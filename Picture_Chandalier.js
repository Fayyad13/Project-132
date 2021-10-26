status = "";

function preload()
{
    img = loadImage("Picture_chandalier.jpg")
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function back()
{
    window.location.href = "index.html";
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}