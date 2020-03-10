import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Store from "./Store";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
  }

  componentDidMount() {
    this.setState(this.props.store);
  }

  render() {
    return (
      <div className='App'>
        <nav className='Nav'>
          <Route
            path={"/"}
            render={routeProps => (
              <Sidebar
                folders={this.state.folders}
                notes={this.state.notes}
                {...routeProps}
              />
            )}
          />
        </nav>
        <header className='Header'>
          <h1>Noteful</h1>
        </header>
        <main className='AppMain'>
          <Route path='/' render={() => <Main notes={this.state.notes} />} />
        </main>
      </div>
    );
  }
}

export default App;
