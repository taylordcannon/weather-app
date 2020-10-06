import React, { Component } from "react";
import '../styles/App.css';
import Card from "./Card"

const API_KEY = "c21dfb3fee07564b4c81fa16168f29e0";



class App extends Component {
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }

    getWeather = async (e) => {
    e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await 
      fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();
      if (city && country) {
        console.log(data)
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
      else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the values."
        });
      }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Weather App</h1>
        <Card
          getWeather = {this.getWeather}
          temperature = {Number(this.state.temperature).toFixed(0)}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        ></Card>
      </div>  
    )
  }
}

export default App;
