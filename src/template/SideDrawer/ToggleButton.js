import React from 'react';

import './ToggleButton.css';

const toggleButtion = props =>{
    return(
        <button className="toggle-button" onClick={props.click}> 
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </button>
    );

};

export default toggleButtion;