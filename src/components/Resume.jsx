import React from 'react'

const Resume = (props) => {
  return (
    <div className='CV-container'>
      <div className="left ">
        <img src={props.coverImage} alt="Image" />
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Resume
