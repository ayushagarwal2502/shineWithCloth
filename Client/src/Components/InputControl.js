import React from 'react'

const InputControl = (props) => {
  return (
    <div>
      {
        props.label &&
      
      <label>{props.label}</label>
}
<br></br>
<input type="text" {...props}/>
    </div>
  )
}

export default InputControl
