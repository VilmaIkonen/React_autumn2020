import React, { Component } from 'react';
import axios from 'axios';

// API data outside the component!
const API = "http://api.weatherstack.com/current"

// Hide API key in .env! Add .env file to .gitignore file!
const params = {
  access_key: process.env.REACT_APP_API_KEY,
  query: 'Helsinki'
}

// w/o weather request "structure", app may crash. Rendering happens too fast and the object is not ready yet.
class Weather extends Component {
  state = { 
    weather: {
      request: {},
      location: {},
      current: {},
    },
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    axios
    .get(API, { params })
    .then((response) => 
      this.setState({ weather: response.data, isLoading: false })
    );
  }

  render() {
    return this.state.isLoading ? (<p>Weather loading ...</p>) : (<p>Current temperature in { this.state.weather.location.name } is...C and it feels like ...C
    </p>);
  }
}

export default Weather;