import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { byId, url } from '../api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    function checkKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            byId("loginBtn").click();
        }
    }

    const addLogin = () => {
        setIsLoading(true)
        let addData = {
            phoneNumber: byId("phoneNumber").value,
            password: byId("password").value,
            // prePassword: "string",
            // name: "string"
        }
        axios.post(url + "user/login", addData)
            .then(res => {
                sessionStorage.setItem("jwtToken", "Bearer " + res.data.body)
                sessionStorage.setItem("role", res.data.message)
                toast.success("Вы успешно вошли в систему✔")
                byId("goHome").click();
                setIsLoading(false)
            })
            .catch(() => {
                toast.error("Номер или пароль неправильный❌")
                setIsLoading(false)
            })
    }
    return (
        <>
            <Link to="/home" id='goHome'></Link>
            <div className='bg-gradient-to-t from-teal-100 to-blue-500 w-full h-screen flex justify-center items-center'>
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 font-inika">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Компания Эпсилон</h2>
                    <div className={`mt-5`}>
                        <label htmlFor='phoneNumber' className="block mb-1 font-bold text-gray-500">
                            Номер телефона
                        </label>
                        <input
                            id="phoneNumber"
                            type="number"
                            className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                            placeholder="Номер телефона" />
                    </div>
                    <div className="mt-5">
                        <label
                            htmlFor="password"
                            className="block mb-1 font-bold text-gray-500 hover:text-gray-600 duration-500">
                            Пароль
                        </label>
                        <div className="relative">
                            <input
                                onKeyDown={checkKeyPress}
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full border-2 border-gray-200 p-3 rounded-xl outline-none focus:border-purple-500 duration-500"
                                placeholder="Введите пароль" />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <Icon className='text-gray-700' icon="mdi:hide" width="25" />
                                ) : (
                                    <Icon className='text-gray-700' icon="mdi:show" width="25" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mt-1">
                        <button
                            onClick={addLogin}
                            id="loginBtn"
                            className={`w-full py-2 px-4 mt-7 bg-purple-500 hover:bg-purple-600 
                            duration-300 shadow-fuchsia-700 rounded-lg text-white font-bold 
                            ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={isLoading}>
                            {isLoading ?
                                <span className=' flex justify-center items-center'>
                                    Sign In
                                    <Icon icon="eos-icons:bubble-loading" className='ml-3' width="25" />
                                </span>
                                : "Sign In"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login