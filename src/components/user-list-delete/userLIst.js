import React, {useEffect, useState} from "react";
import TableUSer from "./table";
import axios from "axios";
import {byIdVal, config, getFile, setConfig, url} from "../api";
import img from "../assets/user.png";
import NavbarDef from "../navbar/navbar";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";

function UserListD() {
    const [user, setUser] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        setConfig();
        getUser();
    }, []);

    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    const resset = () => {
        document.getElementById("reeset").click()
    }

    // getUser
    const getUser = () => {
        let userInfoID = sessionStorage.getItem("userInID");
        axios.get(url + "user/" + userInfoID, config)
            .then(res => setUser(res.data.body))
            .catch(() => console.log("kelmadi!"))
    }  
    const historyResent = () =>{
        let userId = sessionStorage.getItem("userInID");
        axios.post(url +"user/reset/user?userId=" + userId , " " , config)
        .then(() => {
            window.open('/home', '_parent');
            openEditModal()
            resset()
        })
        .catch((err) => {
            console.log(err);
        })
        

    }

   

  

    return (
        <>
            <NavbarDef/>
            <div className=" bg-slate-300 pt-4">
                <Link to='home'></Link>
                <div className=" w-100 flex justify-center">
                    <div className="items-center">
                        <div className=" flex justify-center ">
                            <img
                                className="rounded-full object-cover w-40 h-40"
                                src={user.attachmentId === null
                                    ? img
                                    : getFile + user.attachmentId
                                } alt="user"/>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <button type="button" onClick={openEditModal}
                                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Ортга қайтариш
                            </button>
                            
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold tracking-wider mt-4">
                                {user.lastName} {user.firstName} {user.middleName}
                            </h1>
                            <p className="text-xl  tracking-wider mt-2">
                                {user.phoneNumber === null ? "Нет номера телефона" : user.phoneNumber}
                            </p>
                            <h4 className="text-2xl font-semibold tracking-wider mt-2">
                                {user.positionHeld}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="w-100 flex justify-center items-start mt-10 px-24">
                    <div className="flex w-1/2">
                        <ul className="list-none w-full pr-10">
                            <div className="listlar">
                                <li className="mb-2">Национальност:</li>
                                <span className="font-bold ms-10">{user.nationality}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Пол:</li>
                                <span className="font-bold ms-10">{user.gender}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">День рождения:</li>
                                <span className="font-bold ms-10">{user.day}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Месяц рождения:</li>
                                <span className="font-bold ms-10">{user.month}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Год рождения:</li>
                                <span className="font-bold ms-10">{user.year}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Место рождения:</li>
                                <span className="font-bold ms-10">{user.placeOfBirth}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Адрес: г.:</li>
                                <span className="font-bold ms-10">{user.addressCity}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Область:</li>
                                <span className="font-bold ms-10">{user.region}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Район:</li>
                                <span className="font-bold ms-10">{user.district}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Поселок:</li>
                                <span className="font-bold ms-10">{user.village}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Улица:</li>
                                <span className="font-bold ms-10">{user.street}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">МСГ:</li>
                                <span className="font-bold ms-10">{user.mcg}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">ССГ:</li>
                                <span className="font-bold ms-10">{user.ccg}</span>
                            </div>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <ul className="list-none pl-10">
                            <div className="listlar">
                                <li className="mb-2">Дом:</li>
                                <span className="font-bold ms-10">{user.home}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Квар - тира:</li>
                                <span className="font-bold ms-10">{user.flat}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Образование:</li>
                                <span className="font-bold ms-10">{user.education}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Что и когда окончил:</li>
                                <span className="font-bold ">{user.school}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Специальность:</li>
                                <span className="font-bold ms-10">{user.speciality}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    С какого числа работает на объекте (цифрами):
                                </li>
                                <span className="font-bold ms-10">
                  {user.startWorkingDay}
                </span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    С какого месяца будет работать на сайте (в цифрах)::
                                </li>
                                <span className="font-bold ms-10">
                  {user.startWorkingMonth}
                </span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    С какого года работает на сайте (в цифрах)::
                                </li>
                                <span className="font-bold ms-10">
                  {user.startWorkingYear}
                </span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    С какой даты начал трудовую деятельность:
                                </li>
                                <span className="font-bold ms-10">{user.dateStartWork}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    Семейное положение (женат, неженат, замужем, незамужем,
                                    разведен, разведена):
                                </li>
                                <span className="font-bold ms-10">{user.maritalStatus}</span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">Серия и номер паспорта:</li>
                                <span className="font-bold ms-10">{user.passportSyria} {user.passportNumber}</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <TableUSer/>
            </div>

            {editModal && <div className="flex justify-center z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed flex flex-center justify-center inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <h1 className='text-center font-bold mb-3 '></h1>
                                <div className='flex'>
                                Бу фойдаланувчини орқага қайтармоқчимисиз?
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={historyResent}
                                    
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto">
                                        Да
                                </button>
                                <button type="button" onClick={openEditModal}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600 sm:mt-0 sm:w-auto">Нет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {deleteModal &&
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title">удалить пользователя</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Вы уверены, что хотите запустить
                                                    этого пользователя?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default UserListD;
