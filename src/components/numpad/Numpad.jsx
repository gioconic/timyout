import "./numpad.scss";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Numpad = () => {
  return (
    <div className="numpadContainer">
      <main className="numpad">
        <div className="screen">
          <span className="screen" id="workerCode"></span>
          <div className="cursor"></div>
        </div>
        <div className="keypad">
          <button onClick="doSomething()" className="button">
            1
          </button>
          <button onClick="doSomething()" className="button">
            2
          </button>
          <button onClick="doSomething()" className="button">
            3
          </button>
          <button onClick="doSomething()" className="button">
            4
          </button>
          <button onClick="doSomething()" className="button">
            5
          </button>
          <button onClick="doSomething()" className="button">
            6
          </button>
          <button onClick="doSomething()" className="button">
            7
          </button>
          <button onClick="doSomething()" className="button">
            8
          </button>
          <button onClick="doSomething()" className="button">
            9
          </button>
          <button onClick="doSomething()" className="button backspace">
            <BackspaceOutlinedIcon />
          </button>
          <button className="button">0</button>
          <button className="button ok">
            <DoneOutlinedIcon />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Numpad;
