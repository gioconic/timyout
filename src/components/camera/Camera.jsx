import "./camera.scss";
/* import "./main.js"; */

const Camera = () => {
  return (
    <div>
      {/* <div>
        <script src="face-api.js"></script>
      </div> */}
      <div className="cameraContainer">
        <div className="cameraLens">
          <video
            src="#"
            id="video"
            height={400}
            width={480}
            autoPlay
            muted
          ></video>
          <script src="main.js"></script>
        </div>
      </div>
    </div>
  );
};

export default Camera;
