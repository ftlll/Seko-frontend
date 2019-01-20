import React, { Component } from 'react';
import Home from './route/Home';
import Toolbar from './template/Toolbar';
import SideDrawer from './template/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop';
import Neuerove from './route/Product/Neue_rove';
import About from './route/About';
import Document from './route/Document';
import Request from './route/Request';
import Cutsample from './route/Request/cut_sample';

import './css/bootstrap.css';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import{
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickerHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickerHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/products/neue_rove" component={Neuerove} />
            <Route path="/down_load" component={Document} />
            <Route path="/about" component={About} />
            <Route path="/request" component={Request} />
            <Route path="/request_sample" component={Cutsample} />
          </div>
          <div>
        <ScrollUpButton />
      </div>
        </div>
      </Router>
    );
  }
}

export default App;
