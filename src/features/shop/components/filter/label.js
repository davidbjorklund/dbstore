import React from 'react';
import { connect } from 'react-redux';

const Label = ({z, hidden, data}) => {
    return (
        <div className="label" hidden={hidden}>   
            <div className="inner row jc-left">
                <p>{z.name} <span>{1000*2**data.value}:-</span></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.filterReducer.price,
    }
}


export default connect(mapStateToProps)(Label);