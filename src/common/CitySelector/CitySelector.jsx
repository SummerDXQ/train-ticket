import React,{
    useState,
    useMemo,
    useEffect,
    memo
} from "react";
import './CitySelector.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CityList from './CityList/index';


const CitySelector = memo(function CitySelector(props) {
    const { show, cityData, isLoading, onBack, fetchCityData} = props;
    const [searchKey, setSearchKey] = useState('');
    const key = useMemo(() => searchKey.trim(),[searchKey]);
    // request city list data
    useEffect(()=>{
        if(!show || cityData || isLoading){
            return;
        }
        fetchCityData();
    },[show,cityData,isLoading])

    const toAlpha = alpha =>{
        document.querySelector(`li[data-cate=${alpha}]`).scrollIntoView();
    }

    const outputCitySections = () =>{
        if(isLoading){
            return <div>loading</div>;
        }
        if(cityData){
            return(
                <CityList
                    sections={cityData.cityList}
                    // onSelect={onSelect}
                    toAlpha={toAlpha}
                />
            )
        }
        return <div>Error</div>;
    };

    return(
       <div className={classnames('city-selector',{hidden:!show})}>
            <div className="city-search">
                <div className="search-back" onClick={()=>onBack()}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13,16,21,25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        className="search-input"
                        placeholder="search"
                        onChange={e=>setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    className={classnames('search-clean',{hidden:key.length ===0})}
                    onClick={()=>setSearchKey('')}
                >
                    &#xf063;
                </i>
            </div>
           {outputCitySections()}
       </div>
    )
})

CitySelector.propTypes = {
    show:PropTypes.bool.isRequired,
    cityData:PropTypes.object,
    isLoading:PropTypes.bool.isRequired,
    onBack:PropTypes.func.isRequired,
    fetchCityData:PropTypes.func.isRequired,
    onSelect:PropTypes.func.isRequired
}

export default CitySelector;