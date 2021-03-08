import React from 'react';
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {

  render() {

    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        < Route path="/" exact component = {Home} />
        < Route path="/Upload"  component = {Upload} >
        </Route>
      </Switch>
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
