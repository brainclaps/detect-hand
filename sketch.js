const model = "https://teachablemachine.withgoogle.com/models/lDrGeQMJ/model.json";
let video;
let classifier;
let audio;
let Label = "";

let options = {
     video: {
         facingMode: {
          exact: "environment"
        }
     }
   };

function preload(){
  audio = loadSound('drum.mp3');
  video = createCapture(options);
  video.size(400,400);

}

function setup() {
  classifier = ml5.imageClassifier(model,video,modelLoaded)

}
function classification(){
  classifier.classify(gotResults);
}

function modelLoaded() {
	console.log("Model is Ready.")
	classification();
}

function gotResults(error,results) {
   Label = results[0].label;
  if (Label == 'play') {
     audio.play();
  classification();
     }else{
     classification();
     }
  

}
