import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handlePushRoute = this.handlePushRoute.bind(this)
  }

  handlePushRoute() {
    const history = this.props.history;
    history.push('/about');
  } 


  render() {

    return(
      <div>
        <h3>
          Home Page
        </h3>
        <button onClick={this.handlePushRoute}>
          Go to About
        </button>
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

  constructor(props) {
    super(props);
    this.handleForwardRoute = this.handleForwardRoute.bind(this)
  }

  handleForwardRoute() {
    const history = this.props.history;
    history.goForward();
  } 

  render() {

    return(
      <div>
        <h3>
          Users Page
        </h3>
        <button onClick={this.handleForwardRoute}>
          Go Forward
        </button>
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
