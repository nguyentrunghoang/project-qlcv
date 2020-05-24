import React, { Component } from 'react';
import './App.css';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import Contronller from './components/Contronller';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            
            <div className="container">
                <Home/>
            </div>
        );
    }
}

export default App;
