function setup() { 
  createCanvas(640, 480); 
  video = createCapture(VIDEO);
  video.size(640,380);
  video.hide(); 
  imageModelURL = 'dit link copypastes ind her';   
  label = ""  
  classifier = ml5.imageClassifier(imageModelURL + "model.json"); 
  classifyVideo();
}  

function draw() {
  image(video,0,0);
  function setup() { 
  createCanvas(640, 480); 
  video = createCapture(VIDEO);
  video.size(640,380);
  video.hide(); 
  imageModelURL = 'dit link copypastes ind her';   
  label = ""  
  classifier = ml5.imageClassifier(imageModelURL + "model.json"); 
  classifyVideo();
}  

function draw() {
  image(video,0,0);
  
  if (label == 'hånd') {
    konfetti();
  }
}


// Denne funktion bestemmer hvad videobilledet skal klassificeres som
function classifyVideo() {
  let flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// Når billede klassificeres gemmes resultatet 
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}

}


// Denn funktion bestemmer hvad videobilledet skal klassificeres som
function classifyVideo() {
  let flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// Når billede klassificeres gemmes resultatet 
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}
