import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className='min-h-[850px] flex items-center justify-center'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 pt-5 pb-10 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-semibold text-center mb-12'>Please login</h1>
                <form className='w-5/6 lg:w-2/3 mx-auto'>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="email" placeholder='Email' required />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="password" placeholder='Password' required />
                    </div>

                    <input className='btn mt-8 mb-4 text-xl font-semibold cursor-pointer w-full py-2' type="submit" value="Login" />
                </form>
                <p className='text-lg text-center'>New Here? Please <Link className='font-semibold' to='/signup'>Register</Link></p>

            </div>

        </div>
    );
};

export default Login;