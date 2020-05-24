import React, { Component } from 'react';
import ListUser from './ListUser';
import Home from './Home';
import Admin from './Admin';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

class Navbar extends Component {  
    render() {
        return (
          <Router>
            <div>
            <nav className="navbar navbar-inverse navbar-expand-lg">
              <div className="container-fluid">
                <div className="navbar-brand">
                <Link to='/home'>
                      Trang Chủ
                    </Link>
                    </div>
                <br />
                <ul className="nav navbar-nav">
                  <li className="#">
                    <Link to='/user'>
                      User
                    </Link>
                  </li>
                <a className="navbar-brand" href="#">Login
                </a>
              </ul>
            </div>
          </nav>
        <Route exact path="/user"><ListUser/></Route>
        <Route exact path="/home"><Home/></Route>
        {/* <Route exact path="/"><Home/></Route> */}
        <Route exact path="/admin"><Admin/></Route>
        </div>
         </Router>
        )
    }
}

export default Navbar;
