import React, { Component } from "react";
import '../styles/Card.css';
import Moment from "moment";

const gradientStyle1 = {
    'stopColor': '#FFDE17',
    'stopOpacity': '0.7'
};

const gradientStyle2 = {
    'stopColor':'#FFF200',
    'stopOpacity':'0'
};

class Card extends Component {
    state = {
        dateDMY: Moment(new Date()).format('D.MM.YYYY')
    }

    render () {
        return (
            <div className="background">
            <div className="container"> 
                <nav>
                    <ul>
                        <li><a id="button-snow" className="active"><i className="wi wi-snow"></i></a></li>
                        <li><a id="button-wind"><i className="wi wi-strong-wind"></i></a></li>
                        <li><a id="button-rain"><i className="wi wi-rain"></i></a></li>
                        <li><a id="button-thunder"><i className="wi wi-lightning"></i></a></li>
                        <li><a id="button-sun"><i className="wi wi-day-sunny"></i></a></li>
                    </ul>
                </nav>
                <div id="card" className="weather">
                    <div className="details">
                        <div className="temp">{this.props.temperature}<span>c</span></div>
                        <div className="right">
                            <div id="date">{this.state.dateDMY}</div>
                            <div id="summary">{this.props.description}</div>
                        </div>
                    </div>
                    <div className="description">
                        <p>Location: {this.props.city} {this.props.country}</p>
                        <p>Humidity: {this.props.humidity}</p>
                    </div>
                    <form className="inputs" onSubmit = {this.props.getWeather}>
                        <input type="text" name="city" placeholder="City.."/>
                        <input type="text" name="country" placeholder="Country.."/>
                        <input type="submit" value="Get Weather"/>
                    </form>
                </div>
                <svg id="outer"></svg>
            </div>
            </div>
        );
    }
}

export default Card;