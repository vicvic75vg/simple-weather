import React, {Component}  from 'react';
import Axios from 'axios';

class WeatherData extends Component {
    constructor(props) {
        super(props);
        this.state = {cityname: "", latlong: null };
        
    };
    handleChange = (e) => {
        this.setState({cityname: e.target.value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        var darkSkyRes = await Axios.get('/api/darkSky',{params: {placeName: this.state.cityname}});
        var darkSkyData = await darkSkyRes;
        console.log(darkSkyData);
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3>Enter name of city</h3>
                        <input value={this.state.cityname} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Get Weather"></input>
                </form>
            </div>
            
        )
    }
}
export default WeatherData;
