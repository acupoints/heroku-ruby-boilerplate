import React from 'react'
import './SlyInputField.css'
//

const SlyInputField = React.forwardRef((props, ref) => (
    <div className="sly-input-field-container">

        {/* <h1>[SlyInputField]</h1> */}
        <label>{props.label}</label>
        <input autocomplete="on" 
            className="sly-input-field" type={props.type} ref={ref} 
            // name="email" id="email" 
            size="26" maxLength="52" placeholder={props.placeholder} />
    </div>
));

export default SlyInputField
