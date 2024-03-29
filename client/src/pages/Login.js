import React from 'react';
import "@fontsource/open-sans";
import '@fontsource/josefin-sans';
import image from '../assets/images/nirmaan-iitm.14fdf833.svg';
function Login() {
    return(
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center lg:w-1/2">
                    <div className="bg-white px-10 py-20 rounded-xl border-2 border-green-400">
                    <h1 className="text-4xl font-semibold text-gray-600">LOG IN</h1>
                            <div className="mt-8">
                                <div>
                                    <label className="text-lg font-medium text-green-600">Email<span className="text-red-500">*</span></label>
                                    <input 
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="username@example.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg font-medium text-green-600">Password<span className="text-red-500">*</span></label>
                                    <input 
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="Password"
                                        type="password"
                                    />
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <button className="text-green-500">Forgot Password</button>
                                </div>
                                <div className='mt-8 flex flex-col gap-y-4'>
                                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all py-3 rounded-l bg-green-500 text-white text-lg font-bold">Log in</button>
                                    {/* <button>Sign in with Google</button> */}
                                </div>
                            </div>

                    </div>
                </div>
                <div className="hidden relative lg:flex flex-col items-center w-1/2 justify-center h-full bg-green-600">
                        <img src={image} alt={image} className="mb-4" width="30%"/>
                        <div className="text-4xl font-bold mb-4">TRA<span className="text-white">KTOR</span></div>
                        <div className="w-full flex justify-center font-semibold">Developed by IT Team, OIE - IIT Madras</div>
                </div>
            </div>
    );
            
}

export default Login;