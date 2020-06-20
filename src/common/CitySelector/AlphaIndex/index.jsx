import React, {memo} from "react";

const AlphaIndex = memo(function AlphaIndex(props) {
    const { alpha, onClick} = props;
    console.log('-------------');
    console.log(onClick);
    return (
        <i className="city-index-item" onClick={()=>onClick(alpha)}>{alpha}</i>
    )

})


export default AlphaIndex;