import React from 'react'

const FirstForm = () => {
    return (
        <div className='flex justify-center '>
            <form action="action" className='form w-[80%] bg-white rounded- text-center flex flex-col'>
                <h2 className='text-3xl'>General Info.</h2>

                <div className=" flex flex-col left bg-yellow-300 mt-[4%] w-[30%]">

                    <label className='cursor-pointer'><img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="profile" className='w-[100px] rounded-full'/><input type="file" accept="image/*" id="photo" className='hidden'/></label>

                    <button className="text-red-400 font-bold" id='delete'>Delete X</button>
                </div>
                <div className="right">
                    <form action="">
                        <input type="text" name="firstName" id="" />
                        <input type="text" name="lastName" id="" />
                        <input type="phone" name="Phone" id="" />
                        <input type="email" name="Email" id="" />
                    </form>
                </div>
            </form>
        </div>
    )
}

export default FirstForm
