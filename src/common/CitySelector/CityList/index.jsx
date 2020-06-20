import React, {memo} from "react";
import PropTypes from "prop-types";
import CitySection from '../CitySection/index';
import AlphaIndex from '../AlphaIndex/index';


const CityList = memo(function CityList(props) {
    const { sections, onSelect, toAlpha } = props;
    const alphabet = Array.from(new Array(26),(item,index)=>{
        return String.fromCharCode(65+index);
    })
    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map((section)=>{
                        return(
                            <CitySection
                                key={section.title}
                                title={section.title}
                                cities={section.citys}
                                onSelect={onSelect}
                            />
                        )
                    })
                }
            </div>
            <i className="city-index">
                {
                    alphabet.map(item=>{
                        return (
                            <AlphaIndex key={item} alpha={item} onClick={toAlpha} />
                        )
                    })
                }
            </i>
        </div>
    );
})
CityList.propTypes = {
    sections:PropTypes.array.isRequired,
    onSelect:PropTypes.func.isRequired
}

export default CityList;