import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
        <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full ">
                <div className='border-2 p-20 shadow-lg'>
                    <h2 class="text-center text-2xl mb-4">
                        Login with
                    </h2>
                    <div>
                        <button onClick={handleGoogleLogin} className='border-2 p-2 rounded-full bg-gray-200'> <img className='inline' src="https://img.icons8.com/color/48/000000/google-logo.png" /> Continue with Google </button>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Login;