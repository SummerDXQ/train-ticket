import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import reducers from "./reducers";
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {
        from:'Beijing',
        to:'Shanghai',
        isCitySelectorVisible:false,
        currentSelectingLeftCity:false,
        cityData:null,
        isLoadingCityData:false,
        isDataSelectorVisible:false,
        highSpeed:false,
    },
    applyMiddleware(thunk)
)