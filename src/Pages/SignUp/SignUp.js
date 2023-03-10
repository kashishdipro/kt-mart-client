import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = data =>{
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Your are registered successfully');
            const profile = {
                displayName: data.name
            }
            updateUserProfile(profile)
            .then(() =>{
                saveUser(data.name, data.email, data.role);
            })
            .catch(error =>console.error(error))
        })
        .catch(error => console.error(error))
    }

    const saveUser = (name, email, role) =>{
        const user = {name, email, role};
        fetch('https://kt-mart-server.vercel.app/users/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                setCreateUserEmail(email);
            }
        })
    }

    return (
        <section className='flex justify-center items-center h-[800px] m-4'>
            <div className='w-96 p-5 card shadow-xl'>
                <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        {...register("name", {required:"Name is required"})} 
                        placeholder="Your Name" className="input input-bordered text-neutral"/>
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
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
                        minLength: {value: 6, message: "Password must be 6 characters or more"},
                        pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters"}
                        })} 
                        placeholder="Your Password" className="input input-bordered text-neutral"/>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Who are you?</span>
                        </label>
                        <select className="select select-primary w-full" 
                        {...register("role")}>
                            <option>buyer</option>
                            <option>seller</option>
                        </select>
                    </div>
                    <input className='btn btn-secondary w-full text-base-100 mt-4' value='Sign Up' type="submit" />
                </form>
                <p className='text-center mt-4'>Already have an account <Link to='/login' className='text-primary'>Login</Link></p>
            </div>
        </section>
    );
};

export default SignUp;