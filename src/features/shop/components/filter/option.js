import React from 'react';
import { connect } from 'react-redux';

const Option = ({z, hidden, id, close, updateSelected}) => {
    const toggleSelected = () => {
        updateSelected(id, id);
        setTimeout(() => {
            close();
        }, 50);
    }

    return (
        <div className="option split" hidden={hidden}>   
            <div className="inner row jc-left" onClick={()=>toggleSelected()}>
                <p>{z.name}</p>
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelected: (id, v) => { dispatch({type: "sort", id: id, v: v}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);