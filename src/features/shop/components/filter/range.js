import React, { useState } from 'react';
import { connect } from 'react-redux';

const Range = ({z, hidden, updateValue, data}) => {
    const [value, setValue] = useState(data.value);

    const handleChange = (e) => {
        let v = e.target.value;
        updateValue(z.id, v);
        setValue(_ => v);
    }

    return (
        <div className="range" hidden={hidden}>   
            <div className="inner row jc-left">
                <input type="range" className={"w-100"} min={0} max={6} value={value} onChange={(e)=>handleChange(e)}></input>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.filterReducer.price,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (id, v) => { dispatch({type: "slide", id: id, v: v}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);