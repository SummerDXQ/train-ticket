import React,{
    useCallback,
    useMemo
} from "react";
import {bindActionCreators} from 'redux';
import './App.css';
import {connect} from 'react-redux';
import Header from "../common/Header/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import CitySelector from "../common/CitySelector/CitySelector";
import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity
} from './action';

function App(props) {
    const {
        from,
        to,
        isCitySelectorVisible,
        cityData,
        isLoadingCityData,
        dispatch,
    } = props;
    // avoid unnecessary rerender
    const onBack = useCallback(() => {
        window.history.back();
    },[])

    // const doExchangeFromTo = useCallback(()=>{
    //     dispatch(exchangeFromTo());
    // },[])
    //
    // const doShowCitySelector = useCallback((m)=>{
    //     dispatch(showCitySelector(m));
    // },[])

    const cbs = useMemo(()=>{
        return bindActionCreators({exchangeFromTo,showCitySelector},dispatch)
    },[]);

    const citySelectorCbs = useMemo(()=>{
        return bindActionCreators({
            onBack:hideCitySelector,
            fetchCityData,
            onSelect:setSelectedCity
        },dispatch)
    },[])

    return(
        <div>
            <div className="header-wrapper">
                <Header title="train ticket" onBack={onBack}/>
            </div>
            <form className="from">
                <Journey
                    from={from}
                    to={to}
                    {...cbs}
                    // exchangeFromTo = {doExchangeFromTo}
                    // showCitySelector = {doShowCitySelector}
                />
                <DepartDate/>
                <HighSpeed/>
                <Submit/>
            </form>
            <CitySelector
                show = {isCitySelectorVisible}
                cityData = {cityData}
                isLoading = {isLoadingCityData}
                {...citySelectorCbs}
            />
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch}
    }
)(App);