import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import TodaysWeather from './todaysweather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
        <h1 className="display-3">Hello, CRACKHEAD!</h1>
        <p className="lead">You done partying homie?  Lets get recharged for tomorrow!</p>
        <hr className="my-2" />
        <p>Here's some helpful info to keep you alive dawg!</p>
        <p className="lead">
        <div>
        < TodaysWeather />
        </div>
          <Button color="primary"><a href='https://drugabuse.com/library/how-to-help-a-crack-addict/'> Learn More</a> </Button>
          

        </p>
      </Jumbotron>
      </div>
    

    );
  }
}

export default App;
