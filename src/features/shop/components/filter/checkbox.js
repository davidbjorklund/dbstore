import React, { useState } from 'react';
import { connect } from 'react-redux';

const Checkbox = ({z, hidden, updateChecked, data}) => {
    const [checked, setChecked] = useState(data.value);

    const toggleChecked = () => {
        updateChecked(z.id, !checked);
        setChecked(c => !c);
    }

    return (
        <div className="checkbox" hidden={hidden}>   
            <div className="inner row jc-left" onClick={()=>toggleChecked()}>
                <input type="checkbox" checked={checked} onChange={()=>null}></input> <p>{z.name}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.z.id;
    return {
        data: state.filterReducer.data[id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateChecked: (id, v) => { dispatch({type: "toggle", id: id, v: v}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);