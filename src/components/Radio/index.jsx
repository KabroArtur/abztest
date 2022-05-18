import React from 'react';
import './radio.scss';

const Radio = (props) => {
    return(
            
        <div className="radio">
            <input name={props.name} onChange={props.onChange} value={props.value} className="styled-checkbox" id={props.id} type="checkbox"/>
            <label htmlFor={props.id}>{props.text}</label>
        </div>
        
    );
}
export default Radio;