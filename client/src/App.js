import "./styles/App.css";
import Header from "./Header";
import AboutGame from "./aboutGame";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Game from "./game/Game";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <AboutGame />
        <AboutUs />
        <Footer />
      </Route>
      <Route path="/game" component={Game} />
    </div>
  );
}

export default App;
