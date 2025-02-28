import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [message, setMessage] = useState("");
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            setMessage("Invalid email or password.");
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            alert("Google sign-in failed!");
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 px-4'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8'>
                <h2 className='text-2xl font-semibold text-gray-800 text-center mb-4'>Login to Scrap Marketplace</h2>

                {message && <p className='text-red-500 text-sm text-center mb-3'>{message}</p>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email" id="email" placeholder='Enter your email'
                            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-green-500'
                        />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password" id="password" placeholder='Enter your password'
                            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-green-500'
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </div>
                    <button className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg focus:outline-none transition'>
                        Login
                    </button>
                </form>

                <p className='text-sm text-gray-700 text-center mt-4'>
                    Don't have an account? <Link to="/register" className='text-green-500 hover:text-green-700 font-medium'>Register</Link>
                </p>

                {/* Google Sign-In */}
                <div className='mt-4'>
                    <button
                        onClick={handleGoogleSignIn}
                        className='w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded-lg focus:outline-none transition'>
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>

                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Scrap Marketplace. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Login;
