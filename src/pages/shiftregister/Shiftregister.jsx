import "./shiftregister.scss";
/* import Camera from "../../components/camera/Camera"; */
/* import Numpad from "../../components/numpad/Numpad"; */
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Shiftregister = () => {
  return (
    <div>
      <a href="/">
        <HomeOutlinedIcon className="icon-shift" />
      </a>
      <div className="container">
        {/* <Camera /> */}
        {/* <Numpad /> */}
      </div>
      <div className="buttonContainer">
        <button className="button">Send</button>
      </div>
    </div>
  );
};

export default Shiftregister;
