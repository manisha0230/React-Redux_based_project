import "./styles.css";
import React from "react"
import Home from "./containers/HomeConatiner";
import Header from "./containers/HeaderContainer";
class App extends React.Component{
 render(){ 
   return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
 }
}
export default App;
