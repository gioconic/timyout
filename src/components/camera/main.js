const video = document.getElementById("video");

/* Camera management */
function startVideo() {
  /* To get the media depending on the browser */
  navigator.getUseMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUseMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.getUserMedia(
    { video: {} } /* Gather the info from the webcam */,
    (stream) =>
      (video.srcObject =
        stream) /* camera video streaming assigned to the object 'video' */,
    (err) => console.log(err)
  );
}

startVideo();

/* Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri("/models")]).then(
  startVideo()
);

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia();
  document.body.append(canvas);
}); */
