import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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

  constructor(props) {
    super(props);
    this.handleBackRoute = this.handleBackRoute.bind(this)
  }

  handleBackRoute() {
    const history = this.props.history;
    history.goBack();
  } 

  render() {

    return(
      <div>
        <h3>
          About Page
        </h3>
        <button onClick={this.handleBackRoute}>
          Go Back
        </button>
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


const Navigate = () => {
  return(
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </li>
    </ul>
  )
}



function App() {
  return (
    <div className="App">

      <h1>
        React Router Dom...
      </h1>

      <Router>

      <Navigate />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
