import React, { useEffect, useState } from "react";
import TableUSer from "./table";
import axios from "axios";
import { byId, byIdVal, config, getFile, setConfig, url } from "../api";
import avatar from "../assets/user.png";
import NavbarDef from "../navbar/navbar";
import { toast } from "react-toastify";

function UserList() {
    const [user, setUser] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        setConfig();
        getUser();
    }, []);

    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    // getUser
    const getUser = () => {
        let userInfoID = sessionStorage.getItem("userInID");
        axios.get(url + "user/" + userInfoID, config)
            .then(res => setUser(res.data.body))
            .catch(() => console.log("kelmadi!"))
    }

    async function editUser() {
        const img = new FormData();
        img.append('file', byId('file').files[0]);
        let addData = {
            attachmentId: 0,
            phoneNumber: byIdVal("phoneNumberE"),
            lastName: byIdVal("lastNameE"),
            firstName: byIdVal("firstNameE"),
            middleName: byIdVal("middleNameE"),
            gender: byIdVal("genderE"),
            nationality: byIdVal("nationalityE"),
            year: byIdVal("yearE"),
            month: byIdVal("monthE"),
            day: byIdVal("dayE"),
            placeOfBirth: byIdVal("placeOfBirthE"),
            addressCity: byIdVal("addressCityE"),
            region: byIdVal("regionE"),
            district: byIdVal("districtE"),
            village: byIdVal("villageE"),
            street: byIdVal("streetE"),
            positionHeld: byIdVal("positionHeldE"),
            mcg: byIdVal("mcgE"),
            ccg: byIdVal("ccgE"),
            home: byIdVal("homeE"),
            flat: byIdVal("flatE"),
            education: byIdVal("educationE"),
            school: byIdVal("schoolE"),
            speciality: byIdVal("specialityE"),
            startWorkingDay: byIdVal("startWorkingDayE"),
            startWorkingMonth: byIdVal("startWorkingMonthE"),
            startWorkingYear: byIdVal("startWorkingYearE"),
            dateStartWork: byIdVal("dateStartWorkE"),
            maritalStatus: byIdVal("maritalStatusE"),
            passportSyria: byIdVal("passportSyriaE"),
            passportNumber: byIdVal("passportNumberE"),
            relationshipDtos: []
        }

        if (img.get('file') !== 'undefined')
            await axios.post(url + "user/save/attachment", img, config)
                .then(res => {
                    addData.attachmentId = res.data
                    // console.log(res.data);
                })
                .catch(() => console.log("img ketmadi"))
        // console.log(user.userId);
        await axios.put(`${url}user/${user.userId}`, addData, config)
            .then(() => {
                toast.success('Пользователь успешно изменен');
                openEditModal();
                getUser();
            })
            .catch(err => console.log(err));
    }

    function deleteUser() {
        axios.delete(`${url}user/${user.userId}`, config)
            .then(() => {
                toast.success('Пользователь успешно удален');
                openDeleteModal();
                window.open('/home', '_parent');
            }).catch(() => toast.error('не удалось запустить этого пользователя'));
    }

    return (
        <>
            <NavbarDef />
            <div className=" bg-slate-300 pt-4">
                <div className=" w-100 flex justify-center">
                    <div className="items-center">
                        <div className=" flex justify-center ">
                            <img
                                className="rounded-full object-cover w-40 h-40"
                                src={user.attachmentId === null || user.attachmentId === undefined
                                    ? avatar
                                    : getFile + user.attachmentId
                                } alt="user" />
                        </div>
                        <div className='flex justify-center mt-10'>
                            <button type="button" onClick={openEditModal}
                                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Редактировать
                            </button>
                            <button type="button" onClick={openDeleteModal}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Удалить
                            </button>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold tracking-wider mt-4">
                                {user.lastName} {user.firstName} {user.middleName}
                            </h1>
                            <p className="text-xl  tracking-wider mt-2">
                                {user.phoneNumber === null ? "Нет номера телефона" : user.phoneNumber}
                            </p>
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
                                <li className="mb-2">Занимаемая должность:</li>
                                <span className="font-bold ms-10">{user.positionHeld}</span>
                            </div>
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
                                    С какого месяца будет работать на сайте (в цифрах):
                                </li>
                                <span className="font-bold ms-10">
                                    {user.startWorkingMonth}
                                </span>
                            </div>
                            <div className="listlar">
                                <li className="mb-2">
                                    С какого года работает на сайте (в цифрах):
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
                <TableUSer />
            </div>

            {editModal && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <h1 className='text-center font-bold mb-3 '>Изменить пользователя</h1>
                                <div className='flex'>
                                    <div className='w-5/6 flex items-center flex-col gap-y-3'>
                                        <input type="file" id='file' placeholder='Имж'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='phoneNumberE'
                                            placeholder='Номер телефона'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='nationalityE' defaultValue={user.nationality}
                                            placeholder='Национальност'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='positionHeldE' defaultValue={user.positionHeld}
                                            placeholder='Занимаемая должность'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='firstNameE' defaultValue={user.firstName} placeholder='Имя'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='lastNameE' defaultValue={user.lastName} placeholder='Фамилия'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='middleNameE' defaultValue={user.middleName} placeholder='Отечество'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='yearE' defaultValue={user.year} placeholder='год рождения'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='monthE' defaultValue={user.month} placeholder='месяц рождения'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='dayE' defaultValue={user.day} placeholder='день рождения'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='placeOfBirthE' defaultValue={user.placeOfBirth}
                                            placeholder='Место рождения'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='addressCityE' defaultValue={user.addressCity} placeholder='Адрес: г.'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='schoolE' defaultValue={user.school}
                                            placeholder='Что и когда окончил'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='startWorkingDayE' defaultValue={user.startWorkingDay}
                                            placeholder='С какого числа работает на объекте (цифрами)'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='startWorkingMonthE' defaultValue={user.startWorkingMonth}
                                            placeholder='С какого месяца будет работать на сайте (в цифрах)'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='startWorkingYearE' defaultValue={user.startWorkingYear}
                                            placeholder='С какого года работает на сайте (в цифрах)'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                    </div>
                                    <div className='w-5/6 flex items-center flex-col gap-y-3'>
                                        <input id='regionE' defaultValue={user.region} placeholder='Область'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='dateStartWorkE' defaultValue={user.dateStartWork}
                                            placeholder='С какой даты начал трудовую деятельность'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <select
                                            id="maritalStatusE"
                                            className='border text-sm rounded-lg block w-10/12 p-2.5'>
                                            <option selected disabled>{user.maritalStatus}</option>
                                            <option value="Женат">Женат</option>
                                            <option value="Неженат">Неженат</option>
                                            <option value="Замужем">Замужем</option>
                                            <option value="Незамужем">Незамужем</option>
                                            <option value="Разведен">Разведен</option>
                                            <option value="Разведена">Разведена</option>
                                        </select>
                                        <input id='educationE' defaultValue={user.education} placeholder='Образование'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='specialityE' defaultValue={user.speciality}
                                            placeholder='Специальность'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input type="text" defaultValue={user.text} placeholder='csdc' id='fileE'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='villageE' defaultValue={user.village} placeholder='Область'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='mcgE' defaultValue={user.mcg} placeholder='МСГ'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='ccgE' defaultValue={user.ccg} placeholder='ССГ'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='homeE' defaultValue={user.home} placeholder='Дом'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='flatE' defaultValue={user.flat} placeholder='Квар-тира'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='streetE' defaultValue={user.street} placeholder='Улица'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <select
                                            id="genderE"
                                            className='border text-sm rounded-lg block w-10/12 p-2.5'>
                                            <option selected disabled>{user.gender}</option>
                                            <option value="М">Мужской</option>
                                            <option value="Ж">Женский</option>
                                        </select>
                                        <input id='passportSyriaE' defaultValue={user.passportSyria}
                                            placeholder='Серия паспорта'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                        <input id='passportNumberE' defaultValue={user.passportNumber}
                                            placeholder='номер паспорта'
                                            className='block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={editUser}
                                    className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto">Редактировать
                                </button>
                                <button type="button" onClick={openEditModal}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Отмена
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
                                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
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
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" onClick={deleteUser}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Удалить
                                    </button>
                                    <button type="button" onClick={openDeleteModal}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Отмена
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
}

export default UserList;
