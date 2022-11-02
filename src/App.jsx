import React, { useContext } from "react";
import { MyContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import Stage1 from "./components/Stage_1";
import Stage2 from "./components/Stage_2";

const App = () => {
   const context = useContext(MyContext);

   return (
      <div className="wrapper">
         <div className="center-wrapper">
            <h1>Who Pays the Bill?</h1>

            {context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
         </div>
      </div>
   );
};

export default App;
