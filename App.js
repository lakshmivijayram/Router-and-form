import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Details from './Components/Details';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Formvalidation from './Components/Formvalidation'


class routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/details">Details</Link></li>
              <li><Link to="/formvalidation">Form</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/details" Component={Details}>
              <Route path="/details/content1" Component={Content1} />
              <Route path="/details/content2" Component={Content2} />
              <Route path="/details/content3" Component={Content3} />
            </Route>
            <Route path="/formvalidation" Component={Formvalidation} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default routing; 