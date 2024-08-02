import React, { useState } from 'react'

const FirstForm = (props) => {
    return (
        <div className="form-container md:flex-row">

            <div className="left md:w-[50%] md:mt-[5%]   ">
            <form action="action" className='form-left'>

                <label className='cursor-pointer'>
                <input type="file" accept="image/*" id="photo" onChange={props.handleImageChange}/>
                <img src={props.coverImage} alt="profile" className='w-[100px] rounded-full'/>
                </label>

            </form>
            </div>

            <div className="right md:w-[50%] h-[80%]">
                <form action="" className='form-right'>
                        <div className="input-container ic1">
                            <input id="fullname" className="input" type="text" onChange={props.handleTextChange}/>
                            <div className="cut"></div>
                            <label htmlFor="fullname" className="placeholder">Full name</label>
                        </div>
                        <div className="input-container ic2">
                            <input id="email" className="input" type="text" placeholder=" " onChange={props.handleTextChange} value={props.formData.email}/>
                            <div className="cut cut-short"></div>
                            <label htmlFor="email" className="placeholder">Email</label>
                        </div>
                        <div className="input-container ic2">
                            <input id="email" className="input" type="text" placeholder=" " onChange={props.handleTextChange}/>
                            <div className="cut cut-short"></div>
                            <label htmlFor="email" className="placeholder">Phone</label>
                        </div>
                        <div className="input-container ic2">
                            <input id="address" className="input" type="text" placeholder=" " onChange={props.handleTextChange}/>
                            <div className="cut"></div>
                            <label htmlFor="address" className="placeholder">Address</label>
                        </div>
                        <button type="submit" className="submit">Next</button>
                </form>
            </div>

        </div>
    )
}

export default FirstForm
