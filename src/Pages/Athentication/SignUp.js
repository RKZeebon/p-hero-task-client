import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.pass.value
        const confirmPass = e.target.confirmPass.value
        if (pass === confirmPass) {
            fetch('http://localhost:5000/api/registration', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, pass
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then(data => {
                    if (data.acknowledged) {
                        navigate('/')
                    }
                });

        }

    }
    return (
        <div className='min-h-[850px] flex items-center justify-center'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 pt-5 pb-10 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-semibold text-center mb-12'>Please Sign Up</h1>
                <form onSubmit={handleSignUp} className='w-5/6 lg:w-2/3 mx-auto'>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="text" name="name" id="name" placeholder='Full Name' required />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="email" placeholder='Email' required />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="password" placeholder='Password' required />
                    </div>

                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="confirmPass" id="confirmPassword" placeholder='Confirm Password' required />
                    </div>
                    <input className='btn mt-8 mb-4 text-xl font-semibold cursor-pointer w-full py-2' type="submit" value="Sign Up" />
                </form>
                <p className='text-lg text-center'>Have an Account? Please <Link className='font-semibold' to='/login'>Login</Link></p>

            </div>

        </div>
    );
};

export default SignUp;