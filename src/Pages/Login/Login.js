import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const handleLogin = data =>{
        console.log(data);
    }
    return (
        <section className='flex justify-center items-center h-screen m-4'>
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
                    {/* <select {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                    </select> */}
                    <input className='btn btn-secondary w-full text-base-100 mt-4' value='login' type="submit" />
                </form>
                <p className='text-center mt-4'>New user <Link to='/signup' className='text-primary'>Sign Up</Link></p>
                <div className='divider'>OR</div>
                <button className='btn glass text-neutral w-full'>Continue with Google</button>
            </div>
        </section>
    );
};

export default Login;