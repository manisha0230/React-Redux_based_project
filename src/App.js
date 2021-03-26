import "./styles.css";
import React from "react";
import Header from "./containers/HeaderContainer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
export default App;
