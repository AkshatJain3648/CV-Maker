import React from 'react'

const Resume = (props) => {
  return (
    <div className='cv-container'>
      <div className="left">
        <img src={props.coverImage} alt="Image" className='cover-img'/>

        <div className="contact">
          <h2 className='text-2xl'>Contact</h2>
          <hr />

          <ul>
            <li>Phone: </li>
            <li>Email: </li>
            <li>Address: </li>
          </ul>
        </div>

        <div className="expertise">
        <h2 className='text-2xl'>Expertise</h2>
          <hr />

          <ul>
            <li>React</li>
            <li>JSX</li>
            <li>Wordpress</li>
          </ul>
        </div>

        <div className="education">
        <h2 className='text-2xl'>Education</h2>
        <hr />
          <ul>
            <li>2002</li>
            <li>1991</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <h2 className='text-5xl font-bold'>John Doe</h2>
        <h3 className='text-2xl text-gap-2'>John Doe</h3>
      </div>
    </div>
  )
}

export default Resume
