import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    
    const googleProvider = new GoogleAuthProvider();
    const {logIn, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handleLogin = data =>{
        setError('');
        logIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            setLoginUserEmail(data.email);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        setError('');
        signInWithGoogle(googleProvider)
        .then(result =>{
            const googleUser = result.user;
            if(googleUser){
                const user = {name: googleUser.displayName, email: googleUser.email, role: 'buyer'};
                setLoginUserEmail(googleUser.email);
                fetch('http://localhost:5000/users/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.acknowledged){
                        toast.success('You are Login with Google Account as a buyer')
                    }else{
                        toast(data.message);
                    }
                })
            }
        })
        .catch(error =>setError(error.message))
    }

    return (
        <section className='flex justify-center items-center h-[800px] m-4'>
            <div className='w-96 p-5 card shadow-xl'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        {...register("email", {required:"Email Address is required"})} 
                        placeholder="Your Email" className="input input-bordered text-neutral"/>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        {...register("password", {required:"Password is required",
                        minLength: {value: 6, message: "Password must be 6 characters or more"}
                        })} 
                        placeholder="Your Password" className="input input-bordered text-neutral"/>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-secondary w-full text-base-100 mt-4' value='login' type="submit" />
                    <div>
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </form>
                <p className='text-center mt-4'>New user <Link to='/signup' className='text-primary'>Sign Up</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>Continue with Google</button>
            </div>
        </section>
    );
};

export default Login;