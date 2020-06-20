import React, {memo} from "react";
import PropTypes from "prop-types";
import CityItem from '../CityItem/index';

const CitySection = memo(function CitySection(props) {
    const {
        title,
        cities = [],
        onSelect,
    } = props;

    return (
        <ul className="city-ul">
            <li className="city-li" key={title} data-cate={title}>{title}</li>
            {
                cities.map(city=>{
                    return (
                        <CityItem
                            key={city.name}
                            name={city.name}
                            onSelect={onSelect}
                        />
                    )
                })
            }
        </ul>
    );
})
CitySection.propTypes = {
    title:PropTypes.string.isRequired,
    cities:PropTypes.array,
    onSelect:PropTypes.func.isRequired
}

export default CitySection;