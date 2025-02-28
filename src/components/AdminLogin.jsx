import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import getBaseUrl from '../utils/baseURL';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${getBaseUrl()}/api/admin/login`, data, {
                headers: { 'Content-Type': 'application/json' },
            });
            const auth = response.data;

            if (auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    alert('Session expired! Please log in again.');
                    navigate('/');
                }, 3600 * 1000);
            }

            alert('Admin Login successful! Welcome to Scrap Marketplace.');
            navigate('/dashboard');
        } catch (error) {
            setMessage('Invalid email or password. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold text-green-700 mb-4'>Admin Login - Scrap Marketplace</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Admin Email</label>
                        <input
                            {...register('email', { required: true })}
                            type='email'
                            id='email'
                            placeholder='Enter admin email'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-green-500'
                        />
                        {errors.email && <p className='text-red-500 text-xs italic'>Email is required.</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                        <input
                            {...register('password', { required: true })}
                            type='password'
                            id='password'
                            placeholder='Enter password'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-green-500'
                        />
                        {errors.password && <p className='text-red-500 text-xs italic'>Password is required.</p>}
                    </div>
                    {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
                    <div className='w-full'>
                        <button className='bg-green-600 w-full hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login</button>
                    </div>
                </form>

                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Scrap Marketplace. All rights reserved.</p>
            </div>
        </div>
    );
};

export default AdminLogin;
