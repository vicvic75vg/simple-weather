import React, {Component}  from 'react';
import Axios from 'axios';
import '../../src/styles/css/set2.css';

//REDUX
import { connect } from 'react-redux';
//Creating store for weatherData reducer


class WeatherData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkSkyDataResults: {},
            cityname: ''
        };
    };
    handleChange = (e) => {
        this.setState({cityname: e.target.value});
        this.addClass();
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        var darkSkyRes = await Axios.get('/api/darkSky',{params: {placeName: this.state.cityname}});
        var darkSkyData = await darkSkyRes;
        //This function fires on submit or button click
        console.log(darkSkyData.data);
    };

    getState = (props) => {
        console.log(this.props.data);
    };
    addClass = () => {
        //Function adds a class for input animation
        var input = document.getElementById('input-1');
        var span = document.getElementById('ruri');
        
        if (input.value) {
            span.classList.add('input--filled');
        } else {
            span.classList.remove('input--filled');
        };

    };

    render() {
        return(
            <div>
                        <span className='input input--ruri' id="ruri"> 
                            <form onSubmit={this.handleSubmit}>
                            <input  className="input__field input__field--ruri"  id="input-1" value={this.state.cityname} onChange={this.handleChange}></input>
                            
                            <label className="input__label input__label--ruri" htmlFor="input-1">
                                <span className="input__label-content input__label-content--ruri">Enter City</span>
                            </label>
                            </form>
                        </span>
                        <button onClick={this.handleSubmit}>Get Weather</button>

                        <button onClick={this.getState}>Get State</button>

            </div>


            
        )
    }
};

function mapStateToProps(state) {
    return {
        data: state.data
    };
};




export default connect(mapStateToProps)(WeatherData);
