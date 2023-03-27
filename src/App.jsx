import React, { PureComponent } from "react";
import "./assets/styles/main.scss";
import "./assets/fonts/roboto/roboto.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

class App extends PureComponent {
  render() {
    return (
      <>
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
