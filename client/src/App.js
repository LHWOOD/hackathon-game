import "./styles/App.css";
import Header from "./Header";
import AboutGame from "./aboutGame";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Game from "./game/Game";
import Form from "./Form";
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
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
