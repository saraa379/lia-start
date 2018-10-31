import React, { Component } from 'react';
import Menu from './components/Menu.js';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="AppWrap">
        <header>
            <Menu></Menu>
        </header>

        <main className="main">
        <div id="HomeWrap" className={(this.props.currentTab==="Home") ? "visible" : "notVisible"}>
            Home page
        </div>
        <div id="ContactWrap" className={(this.props.currentTab==="Contact") ? "visible" : "notVisible"}>
            Contact page
        </div>

        </main>

        <footer>
              <p>paragraph</p>
              <p>paragraph</p>
        </footer>
      </div>
    );
  }
}

let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(App);
