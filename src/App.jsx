import React, { PureComponent } from "react";
import "./assets/styles/main.scss";
import "./assets/fonts/roboto/roboto.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Context from "./Context";

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
        <Home />
        <Footer />
      </Context.Provider>
    );
  }
}

export default App;
