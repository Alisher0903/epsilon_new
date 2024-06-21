import React, { useEffect, useState } from 'react';
import brand from '../assets/brand.png';
import { Link } from 'react-router-dom';
import userImg from "../assets/user.png";
import { byId, byIdVal, config, getUser, setConfig, url } from '../api';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NavbarDef = ({getUserHome}) => {

    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    useEffect(() => {
        setConfig();
        getUser(setUser)
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen)
    const toggleMenuEdit = () => setIsOpenEdit(!isOpenEdit)

    const logOut = () => byId("logOut").click();

    // edituser
    const EditUser = () => {
        let editData = {
            name: byId("name").value,
            phoneNumber: byId("phoneNumber").value,
            password: byId("password").value,
            prePassword: byId("prePassword").value
        }
        axios.put(url + "user/admin", editData, config)
            .then(() => {
                toggleMenuEdit();
                getUser(setUser)
                toast.success("Ваша информация была успешно изменена✔")
            })
            .catch(() => {
                toast.error("Произошла ошибка")
            })
    }

    const backPage = () => getUserHome();

    return (
        <>
            <Link to="/" id='logOut'></Link>
            <div className='bg-navBg flex justify-between items-center sticky top-0'>
                <Link to="/home">
                    <img src={brand} onClick={backPage} alt="brand" className='w-[300px]' />
                </Link>
                <div className='flex justify-end items-center relative'>
                    <img onClick={toggleMenu} src={userImg} alt="img" className='w-14 h-14 rounded-full mr-3 cursor-pointer' />
                    <p onClick={toggleMenu} className='font-inika font-bold mr-10 text-xxl text-white cursor-pointer'>{user.name}</p>
                </div>
            </div>
            <div
                className={`${isOpen ? "absolute duration-500" : "hidden"} 
                right-8 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}>
                {/* Menu items */}
                <div className="h-32 rounded-t-xl flex justify-center items-center">
                    <img className="w-20 h-20 rounded-full" src={userImg} alt="Gift" />
                    <span className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer"
                        onClick={toggleMenu}>
                        <Icon icon="carbon:close-filled" width="30" height="30" color="black" />
                    </span>
                </div>
                <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2 text-center">{user.name}</div>
                    <p className="text-center text-black">{user.phoneNumber}</p>
                </div>
                <div className="mb-4 mt-6 text-center">
                    <button
                        onClick={() => {
                            toggleMenuEdit();
                            toggleMenu();
                        }}
                        className="mr-5 bg-yellow-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 duration-200">Редактировать</button>
                    <button
                        className="bg-red-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 duration-200"
                        onClick={() => {
                            logOut();
                            sessionStorage.clear();
                        }}
                    >Выйти</button>
                </div>
            </div>

            <div
                className={`${isOpenEdit ? "absolute duration-500" : "hidden"} w-full flex justify-center mt-10`}>
                <div className='w-1/3 bg-white rounded-xl shadow-xl z-20'>
                    <div className="h-32 rounded-t-xl flex justify-center items-center">
                        <img className="w-20 h-20 rounded-full" src={userImg} alt="Gift" />
                    </div>
                    <div className="px-12 py-2">
                        <div className='flex flex-col font-inika mx-2'>
                            <label htmlFor="name" className='mb-1 ml-1 text-sm w-full'>Имя</label>
                            <input
                                id='name'
                                defaultValue={user && user.name}
                                className='shadow-lg px-3 py-2 w-full rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                                placeholder='Имя...' />
                        </div>
                        <div className='flex flex-col font-inika mx-2'>
                            <label htmlFor="phoneNumber" className='mb-1 ml-1 mt-6 text-sm w-full'>Номер телефона</label>
                            <input
                                id='phoneNumber'
                                defaultValue={user && user.phoneNumber}
                                className='shadow-lg px-3 py-2 w-full rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                                placeholder='Номер телефона...' />
                        </div>
                        <div className='flex flex-col font-inika mx-2'>
                            <label htmlFor="password" className='mb-1 ml-1 mt-6 text-sm w-full'>Пароль</label>
                            <input
                                id='password'
                                defaultValue={user && user.password}
                                className='shadow-lg px-3 py-2 w-full rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                                placeholder='Пароль...' />
                        </div>
                        <div className='flex flex-col font-inika mx-2'>
                            <label htmlFor="prePassword" className='mb-1 ml-1 mt-6 text-sm w-full'>Предварительный пароль</label>
                            <input
                                id='prePassword'
                                className='shadow-lg px-3 py-2 w-full rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                                placeholder='Предварительный пароль...' />
                        </div>
                    </div>
                    <div className="mb-4 mt-6 px-14 text-end">
                        <button
                            onClick={toggleMenuEdit}
                            className="mr-5 bg-yellow-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 
                        duration-200">Закрывать</button>
                        <button
                            onClick={EditUser}
                            className="bg-green-500 text-white font-bold rounded-lg py-2 px-4 active:scale-90 
                        duration-200"
                        >Сохранять</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarDef