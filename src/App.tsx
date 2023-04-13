import "./App.css";
import "moment/locale/fr";
import moment from "moment";
import { Home } from "./page/Home";
import { style } from "typestyle";
import { Font } from "./style/designSystem";

moment().locale("fr");

const body = style({
  fontFamily: Font.Raleway,
});
function App() {
  return (
    <div className={body}>
      <Home />
    </div>
  );
}

export default App;
