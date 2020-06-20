export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'ACTION_SET_TO';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'ACTION_SET_CURRENT_SELECTING_LEFT_CITY';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA';
export const ACTION_SET_IS_DATA_SELECTOR_VISIBLE = 'ACTION_SET_IS_DATA_SELECTOR_VISIBLE';
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED';

export function setFrom(from) {
    return{
        type:ACTION_SET_FROM,
        value:from
    }
}

export function setTo(to) {
    return{
        type:ACTION_SET_TO,
        value:to
    }
}

export function setIsLoadingCityData(isLoadingCityData) {
    return{
        type:ACTION_SET_IS_LOADING_CITY_DATA,
        value:isLoadingCityData
    }
}

export function setCityData(cityData) {
    return{
        type:ACTION_SET_CITY_DATA,
        value:cityData
    }
}

export function toggleHighSpeed() {
    return (dispatch,getState)=>{
        const {highSpeed} = getState();
        dispatch({
            type:ACTION_SET_HIGH_SPEED,
            value: !highSpeed,
        })
    }
}

export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) =>{
        dispatch({
            type:ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            value: true,
        });
        dispatch({
            type:ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
            value: currentSelectingLeftCity,
        })
    }
}

export function hideCitySelector() {
    return{
        type:ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        value:false
    }
}

export function setSelectedCity(city) {
    return (dispatch,getState)=>{
        const {currentSelectingLeftCity} = getState();
        if(currentSelectingLeftCity){
            dispatch(setFrom(city));
        }else {
            dispatch(setTo(city));
        }
        dispatch(hideCitySelector());

    }
}

export function showDateSelector() {
    return{
        type:ACTION_SET_IS_DATA_SELECTOR_VISIBLE,
        value:true
    }
}

export function hideDateSelector() {
    return{
        type:ACTION_SET_IS_DATA_SELECTOR_VISIBLE,
        value:false
    }
}

export function exchangeFromTo() {
    return (dispatch,getState)=>{
        const {from,to} = getState();
        // console.log('exchangeFromTo');
        dispatch(setFrom(to));
        dispatch(setTo(from));
    }
}

export function fetchCityData() {
    return (dispatch,getState)=>{
        const {isLoadingCityData} = getState();
        if(isLoadingCityData){
            return;
        }
        const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');
        if(Date.now() < cache.expires){
            dispatch(setCityData(cache.data));
            return;
        }
        dispatch(setIsLoadingCityData(true));
        fetch('/rest/cities?_'+Date.now())
            .then(res => res.json())
            .then(cityData =>{
                dispatch(setSelectedCity(cityData));
                localStorage.setItem(
                    'city_data_cache',
                    JSON.stringify({
                        expires:Date.now() + 60 * 1000,
                        data:cityData
                    })
                );
                dispatch(setIsLoadingCityData(false));
            })
            .catch(()=>{
                dispatch(setIsLoadingCityData(false));
            })
    }
}

