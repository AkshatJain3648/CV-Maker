import React from 'react'

const Resume = (props) => {
  return (
    <div className='cv-container none'>
      <div className="cv-left">
        <img src={props.coverImage} alt="Image" className='cover-img w-[90px] rounded-full' />

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

      <div className="cv-right">
        <div className="info">
          <h2 className='text-6xl font-bold'>John Doe</h2>
          <h3 className='text-3xl text-gap-2 tracking-widest mb-3 ml-1 font-light'>Data Scientist</h3>
          <span className='intro text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur rem dolores perspiciatis officiis dolorem quae assumenda.</span>
        </div>

        <div className="experience">
          <h3 className='text-2xl'>Experience</h3>
        </div>
      </div>

    </div>
  )
}

export default Resume
