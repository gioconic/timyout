import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useState } from "react"; /* Para cargar imágenes en las páginas user & product */

const New = ({ inputs, title }) => {
  /* Para cargar imágenes en las páginas user & product */
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* Para cargar imágenes en las páginas user & product */}
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="no_Image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <UploadFileOutlinedIcon className="icon" />
                </label>
                {/* onChange -> Para cargar imágenes en las páginas user & product */}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    {" "}
                    {/* Como usamos map, debe ir incluirse 'key={input.id}' */}
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
