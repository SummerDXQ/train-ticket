import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA,
    ACTION_SET_IS_DATA_SELECTOR_VISIBLE,
    ACTION_SET_HIGH_SPEED,
} from './action';

export default {
    from(state = 'Beijing',action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_FROM:
                // console.log('from',value);
                return value;
            default:
        }
        return state;
    },
    to(state = 'Shanghai',action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_TO:
                // console.log('to',value);
                return value;
            default:
        }
        return state;
    },
    isCitySelectorVisible(state = false,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return value;
            default:
        }
        return state;
    },
    currentSelectingLeftCity(state = false,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
                return value;
            default:
        }
        return state;
    },
    cityData(state = null,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_CITY_DATA:
                return value;
            default:
        }
        return state;
    },
    isLoadingCityData(state = false,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return value;
            default:
        }
        return state;
    },
    isDataSelectorVisible(state = false,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_IS_DATA_SELECTOR_VISIBLE:
                return value;
            default:
        }
        return state;
    },
    highSpeed(state = false,action){
        const {type, value} = action;
        switch (type) {
            case ACTION_SET_HIGH_SPEED:
                return value;
            default:
        }
        return state;
    },
}
