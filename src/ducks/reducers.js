import {
   UPDATE_DATA,DELETE_DATA
} from './actionType';
import { combineReducers } from 'redux';

const initialData = {
    data: ''
};

const weatherReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                weatherData: action.payload
            };

        case DELETE_DATA:
            return {
                weatherData: null
            }
        default:
            return state;
    };
};

const testReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'TEST':
            return 'TEST';
        default: return 'DEFAULT'
    }
}



//Combining reducers
const rootReducer = combineReducers({weatherReducer, testReducer});
export default rootReducer;


