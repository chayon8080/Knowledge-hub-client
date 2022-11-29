import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth'
import { IconName } from "react-icons/fa";
import { AuthContext } from '../../src/contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    // const { signIn, loader, googleSignin } = useContext(AuthContext);
    const { googleSignin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then()
    }

    const handleSubmit = event => {
        // event.preventDefault();
        // const form = event.target;
        // const email = form.event.value;
        // const password = form.password.value;
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         form.reset();
        //         setError('');
        //         navigate(from, { replace: true });
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setError(error.message);
        //     })
    }

    return (
        <div className='text-center mt-32 mb-44'>
            <div className='flex justify-around w-56 mx-auto'>
                <div>
                    <h3 className='uppercase mb-3 -ml-10'>login</h3>
                </div>
                <div>
                    <Link to='/register'>
                        <button className="btn btn-xs ml-10">Create An Account</button>
                    </Link>
                </div>

            </div>
            <Form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                    <Link>
                        <button className='bg-black px-16 py-3 text-white rounded-md' type='submit'>Login</button>
                    </Link>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{ border: "2px solid", width: '280px' }}>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;