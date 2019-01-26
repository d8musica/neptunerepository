import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Services from './components/Services.js'
import Wwu from './components/Wwu.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js' // ctrl + shift + D DUPLICAR

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/services' component={Services}></Route>
          <Route exact path='/workwithus' component={Wwu}></Route>
          <Route exact path='/contactus' component={Contact}></Route>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
