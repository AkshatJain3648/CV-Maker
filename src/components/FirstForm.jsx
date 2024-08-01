import React from 'react'

const FirstForm = () => {
    return (
        <div className='flex justify-center h-[100vh] bg-[#1d1e22]'>
            <form action="action" className='form px-3 py-6 w-[80%] bg-[#15172b] rounded-md text-center flex flex-col mt-[5%]'>
            <h2 class="title text-3xl text-white font-">Welcome</h2>
            <h3 class="subtitle">Let's create your CV!</h3>

                <div className="left flex flex-col border border-solid border-yellow-600 md:w-[50%]  items-center py-3 px-2">

                    <label className='cursor-pointer'><img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="profile" className='w-[100px] rounded-full' /><input type="file" accept="image/*" id="photo" className='hidden' /></label>

                    {/* <button className="text-red-400 font-bold" id='delete'>Delete X</button> */}
                </div>
                <div className="right flex flex-col md:w-[50%]">
                    <form action="">
                        <div class="input-container ic1">
                            <input id="firstname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label for="firstname" class="placeholder">First name</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="lastname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label for="lastname" class="placeholder">Last name</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="email" class="input" type="text" placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label for="email" class="placeholder">Email</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="email" class="input" type="text" placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label for="email" class="placeholder">Phone</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="address" class="input" type="address" placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label for="address" class="placeholder">Address</label>
                        </div>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default FirstForm
