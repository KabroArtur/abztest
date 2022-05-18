import React from 'react';

import './input.scss';

export function Input(props){
    return(
        <div className="floating-label-group" id={props.id}>
			<input name={props.name} onChange={props.onChange} type={props.type} id={props.id} className="form-control" autoComplete="off" autoFocus required />
			<label className="floating-label">{props.placeholder}</label>
            <span>{props.help}</span>
        </div>
    );
}