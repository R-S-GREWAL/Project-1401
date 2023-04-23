
function setup(){
  canvas = createCanvas(150,200);
  canvas.parent("canvas");
  video = createCapture(VIDEO);
  video.size(100,200);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
  console.log('Model Loaded!');
  poseNet.on('pose,gotPoses')
}