var pic;
var stat=""
var objects=[]
function preload(){
    pic=loadImage('Medicine.jpg');
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}
 function modelLoaded(){
     console.log("modelloaded")
     stat="true"
     objectDetector.detect(pic, gotResult);

 }

 function gotResult(error, results){
     if(error){
         console.log(error);
         alert("Hey there! Sorry about that! Ira Wheera Industries is experiencing a few tech issues. Don't worry, though! Our tech team is hot on the job. Please try again in a few minutes, please. Thanks so much, from Ira Wheera Industries.")
     }
     else{
         console.log(results);
        objects=results;
        
     }
 }
function draw(){
    image(pic, 0, 0, 500, 400);

    if(stat != ""){
        for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML ="Status: Objects Detected";
        fill("lightseagreen");
        percent=floor(objects[i].confidence * 100)
        text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y );
        noFill();
        stroke("lightseagreen");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }

    }
}