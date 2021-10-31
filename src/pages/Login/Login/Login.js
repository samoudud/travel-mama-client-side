import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Login = () => {
    const { signInWithGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUrl)
            })
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));

    }
    return (
        <div class="w-full h-screen flex items-center justify-center common-bg">
            <div class="bg-gray-800 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
                <img src={logo} alt="" />
                <br />
                <button onClick={handleGoogleLogin} class="w-full my-5 h-12 rounded-lg bg-red-600 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"><img className='inline' src="https://img.icons8.com/color/48/000000/google-logo.png" alt='logo' />Sign with Google</button>
            </div>
        </div>
    );
};

export default Login;


/* 

<div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full ">
                <div className='border-2 p-20 shadow-lg'>
                    <h2 className="text-center text-2xl mb-4">
                        Login with
                    </h2>
                    <div>
                        <button onClick={handleGoogleLogin} className='border-2 p-2 rounded-full bg-gray-200'>  Continue with Google </button>
                    </div>
                </div>

            </div>
        </div >
*/