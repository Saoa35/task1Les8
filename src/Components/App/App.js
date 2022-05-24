import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return(
      <div>
        <h3>
          Home Page
        </h3>
      </div>
    )
  }
}

class About extends React.Component {

  render() {

    return(
      <div>
        <h3>
          About Page
        </h3>
      </div>
    )
  }
}

class Users extends React.Component {

  render() {

    return(
      <div>
        <h3>
          Users Page
        </h3>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />

      </Router>
    </div>
  );
}

export default App;
