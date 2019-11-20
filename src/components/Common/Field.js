import React from 'react'

function Field(props) {
  return (
    <div className="form-group">
      {props.elementName === 'input' ?
         <input 
            className="form-control" 
            id={props.id}
            type={props.type}
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder}
            required="required" 
            data-validation-required-message={`Please enter your ${props.name}.`}
         />
        :
          <textarea 
            className="form-control" 
            id={props.name}
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder}
            required="required" 
            data-validation-required-message="Please enter a message."
          />  
      }
    <p className="help-block text-danger"></p>
  </div>
  )
}

export default Field
