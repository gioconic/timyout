import "./numpad.scss";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
/* import { code } from "../../numpad"; */

const Numpad = () => {
  return (
    <div className="numpadContainer">
      <main className="numpad">
        <div className="screen">
          <span className="screen" id="workerCode"></span>
          <div className="cursor"></div>
        </div>
        <div className="keypad">
          <button onClick="doSomething()" className="buttonKeypad">
            1
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            2
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            3
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            4
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            5
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            6
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            7
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            8
          </button>
          <button onClick="doSomething()" className="buttonKeypad">
            9
          </button>
          <button onClick="doSomething()" className="buttonKeypad backspace">
            <BackspaceOutlinedIcon />
          </button>
          <button className="buttonKeypad">0</button>
          <button className="buttonKeypad ok">
            <DoneOutlinedIcon />
          </button>
          {/* {let doSomething = function () {}} */}
        </div>
      </main>
    </div>
  );
};

export default Numpad;
