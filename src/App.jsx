import React, { PureComponent } from "react";
import "./assets/styles/main.scss";
import "./assets/fonts/roboto/roboto.css";
import Home from "./pages/Home";
import Header from "./pages/_shared/Header";
import Footer from "./pages/_shared/Footer";
import Context from "./Context";

import imgBackground from "./assets/images/intro.jpg";

class App extends PureComponent {
  state = {
    headerClass: "",
  };

  setRenderInformation = (value = true) => {
    if (value) {
      document.body.classList.add("noScroll");
      this.setState({ headerClass: "open-header" });
    } else {
      document.body.classList.remove("noScroll");
      this.setState({ headerClass: "" });
    }
  };

  render() {
    const { headerClass } = this.state;
    return (
      <Context.Provider
        value={{
          setRenderInformation: this.setRenderInformation,
          headerClass,
        }}
      >
        <img
          className="image-background"
          src={imgBackground}
          alt="desktop setup"
          height="100%"
          width="100%"
        />
        <Header />
        <Home />
        <Footer />
      </Context.Provider>
    );
  }
}

export default App;
