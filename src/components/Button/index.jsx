import React from 'react';

import './button.scss';

export function Button(props){
    return(
        <button className={props.className} onClick={props.onClick} id={props.id} disabled={props.disabled}>{props.text}</button>
    );
}