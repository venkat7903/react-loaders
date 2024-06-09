import {
  Oval,
  Puff,
  Rings,
  TailSpin,
  ThreeCircles,
  ThreeDots,
  Triangle,
} from "react-loader-spinner";

import "./App.css";

const App = () => {
  return (
    <div className="loader-container">
      <div className="sub-container">
        <Oval color="white" />
        <p>Oval</p>
      </div>
      <div className="sub-container">
        <TailSpin color="white" />
        <p>TailSpin</p>
      </div>
      <div className="sub-container">
        <ThreeDots color="white" />
        <p>ThreeDots</p>
      </div>
      <div className="sub-container">
        <ThreeCircles color="white" />
        <p>ThreeCircles</p>
      </div>
      <div className="sub-container">
        <Rings color="white" />
        <p>Rings</p>
      </div>
      <div className="sub-container">
        <Puff color="white" />
        <p>Puff</p>
      </div>
      <div className="sub-container">
        <Triangle visible={true} height="80" width="80" color="white" />
        <p>Triangle</p>
      </div>
    </div>
  );
};

export default App;
