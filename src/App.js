import React from "react";
import Header from "./Header";
import "./App.css";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello World!, I am here to <strong>CONQUER</strong> this puny world!
        </h1>
        <h6>*dies*</h6>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
