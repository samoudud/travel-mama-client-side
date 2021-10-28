import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { sigInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        sigInUsingGoogle()
            .then(result => {
                history.push(redirectUrl)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Log in with google</button>
        </div>
    );
};

export default Login;