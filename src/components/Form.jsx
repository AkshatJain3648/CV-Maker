import React, { useState } from 'react'

const Form = () => {
  
  return (
    <div className='form-container'>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder='' />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
    </div>
  )
}

export default Form
