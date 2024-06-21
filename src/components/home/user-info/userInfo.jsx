import React, {useEffect, useState} from 'react';
import {Icon} from '@iconify/react';
import NavbarDef from '../../navbar/navbar';
import PlusUserInfo from './plusUserInfo';
import {byId, byIdVal, config, setConfig, url} from '../../api';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

const UserInfo = () => {
    const [fileName, setFileName] = useState("Выберите изображение");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        } else {
            setFileName("Выберите изображение");
        }
    };

    useEffect(() => {
        setConfig();
    }, []);

    const [templates, setTemplates] = useState([{}]);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreate = () => {
        // console.log(templates.length);
        setTemplates((prevTemplates) => [...prevTemplates, {}]);
    };

    const handleRemove = () => {
        if (templates.length > 1) {
            setTemplates((prevTemplates) => prevTemplates.slice(0, -1));
        }
    };

    // addUser
    const addUser = async () => {
        setIsLoading(true)
        const img = new FormData();
        img.append('file', byId('attachmentId').files[0]);
        let relationshipDtos = templates.map((_, i) => {
            return {
                closeRelatives: byIdVal(`closeRelatives${i}`),
                lastName: byIdVal(`lastName${i}`),
                firstName: byIdVal(`firstName${i}`),
                middleName: byIdVal(`middleName${i}`),
                placeOfBirth: byIdVal(`placeOfBirth${i}`),
                year: byIdVal(`year${i}`),
                month: byIdVal(`month${i}`),
                day: byIdVal(`day${i}`),
                placeOfWork: byIdVal(`placeOfWork${i}`),
                jobTitle: byIdVal(`jobTitle${i}`),
                addressCity: byIdVal(`addressCity${i}`),
                region: byIdVal(`region${i}`),
                district: byIdVal(`district${i}`),
                village: byIdVal(`village${i}`),
                street: byIdVal(`street${i}`),
                mcg: byIdVal(`mcg${i}`),
                ccg: byIdVal(`ccg${i}`),
                home: byIdVal(`home${i}`),
                flat: byIdVal(`flat${i}`),
            }
        });

        let addData = {
            attachmentId: 0,
            phoneNumber: byIdVal("phoneNumber"),
            positionHeld: byIdVal("positionHeld"),
            lastName: byIdVal("lastName"),
            firstName: byIdVal("firstName"),
            middleName: byIdVal("middleName"),
            gender: byIdVal("gender"),
            nationality: byIdVal("nationality"),
            year: byIdVal("year"),
            month: byIdVal("month"),
            day: byIdVal("day"),
            placeOfBirth: byIdVal("placeOfBirth"),
            addressCity: byIdVal("addressCity"),
            region: byIdVal("region"),
            district: byIdVal("district"),
            village: byIdVal("village"),
            street: byIdVal("street"),
            mcg: byIdVal("mcg"),
            ccg: byIdVal("ccg"),
            home: byIdVal("home"),
            flat: byIdVal("flat"),
            education: byIdVal("education"),
            school: byIdVal("school"),
            speciality: byIdVal("speciality"),
            startWorkingDay: byIdVal("startWorkingDay"),
            startWorkingMonth: byIdVal("startWorkingMonth"),
            startWorkingYear: byIdVal("startWorkingYear"),
            dateStartWork: byIdVal("dateStartWork"),
            maritalStatus: byIdVal("maritalStatus"),
            passportSyria: byIdVal("passportSyria"),
            passportNumber: byIdVal("passportNumber"),
            relationshipDtos
        }

        if (img.get('file') !== 'undefined')
            await axios.post(url + "user/save/attachment", img, config)
                .then(res => addData.attachmentId = res.data)
                .catch(() => console.log("img ketmadi"))

        await axios.post(url + "user", addData, config)
            .then(async () => {
                toast.success("Пользователь успешно обслужен✔")
                await byId("hoHomePage").click();
                window.open('/home', '_parent');
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                // toast.error("Произошла ошибка❌")
            })
    }

    return (
        <>
            <Link to="/home" id='goHomePage'></Link>
            <NavbarDef/>
            <div className='w-full min-h-screen bg-addBg pb-10'>
                <div className="flex items-center justify-center pt-16">
                    <label htmlFor="attachmentId"
                           className="cursor-pointer active:scale-90 duration-200 flex flex-row justify-center items-center">
                        <span><Icon icon="flat-color-icons:plus" width="50" height="50"/></span>
                        <span
                            className='font-inika font-bold text-2xl text-black hover:text-blue-800 duration-300 ml-2 tracking-wider'>{fileName}</span>
                    </label>
                    <input id="attachmentId" type="file" className="hidden" onChange={handleFileChange}/>
                </div>

                <div className='flex flex-wrap justify-center mt-4 pb-10'>
                    {/* bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="lastName" className='mb-1 ml-1 mt-10 text-sm w-64'>Фамилия</label>
                        <input
                            id='lastName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Фамилия...'/>
                    </div>
                    {/* ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="firstName" className='mb-1 ml-1 mt-10 text-sm w-64'>Имя</label>
                        <input
                            id='firstName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Имя...'/>
                    </div>
                    {/* uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="middleName" className='mb-1 ml-1 mt-10 text-sm w-64'>Отечество</label>
                        <input
                            id='middleName'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Отечество...'/>
                    </div>
                    {/* turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="gender" className='mb-1 ml-1 mt-10 text-sm w-64'>Пол</label>
                        <select
                            id="gender"
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'>
                            <option selected disabled>Пол...</option>
                            <option value="М">Мужской</option>
                            <option value="Ж">Женский</option>
                        </select>
                    </div>
                    {/* besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="nationality" className='mb-1 ml-1 mt-10 text-sm w-64'>Национальност</label>
                        <input
                            id='nationality'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Национальност...'/>
                    </div>
                    {/* olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="day" className='mb-1 ml-1 mt-10 text-sm w-64'>день рождения</label>
                        <input
                            id='day'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день рождения...'/>
                    </div>
                    {/* yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="month" className='mb-1 ml-1 mt-10 text-sm w-64'>месяц рождения</label>
                        <input
                            id='month'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц рождения...'/>
                    </div>
                    {/* sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="year" className='mb-1 ml-1 mt-10 text-sm w-64'>год рождения</label>
                        <input
                            id='year'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год рождения...'/>
                    </div>
                    {/* To'qqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="placeOfBirth" className='mb-1 ml-1 mt-10 text-sm w-64'>Место рождения</label>
                        <input
                            id='placeOfBirth'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Место рождения...'/>
                    </div>
                    {/* o'n */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="addressCity" className='mb-1 ml-1 mt-10 text-sm w-64'>Адрес: г.</label>
                        <input
                            id='addressCity'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Адрес: г....'/>
                    </div>
                    {/* o'n bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="region" className='mb-1 ml-1 mt-10 text-sm w-64'>Область</label>
                        <input
                            id='region'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Область...'/>
                    </div>
                    {/* o'n ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="district" className='mb-1 ml-1 mt-10 text-sm w-64'>Район</label>
                        <input
                            id='district'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Район...'/>
                    </div>
                    {/* un uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="village" className='mb-1 ml-1 mt-10 text-sm w-64'>Поселок</label>
                        <input
                            id='village'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Поселок...'/>
                    </div>
                    {/* un turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="mcg" className='mb-1 ml-1 mt-10 text-sm w-64'>МСГ</label>
                        <input
                            id='mcg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='МСГ...'/>
                    </div>
                    {/* un besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="ccg" className='mb-1 ml-1 mt-10 text-sm w-64'>ССГ</label>
                        <input
                            id='ccg'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='ССГ...'/>
                    </div>
                    {/* un olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="home" className='mb-1 ml-1 mt-10 text-sm w-64'>Дом</label>
                        <input
                            id='home'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Дом...'/>
                    </div>
                    {/* un yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="flat" className='mb-1 ml-1 mt-10 text-sm w-64'>Квар-тира</label>
                        <input
                            id='flat'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Квар-тира...'/>
                    </div>
                    {/* un sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="education" className='mb-1 ml-1 mt-10 text-sm w-64'>Образование</label>
                        <input
                            id='education'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Образование...'/>
                    </div>
                    {/* un tuqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="school" className='mb-1 ml-1 mt-10 text-sm w-64'>Что и когда окончил</label>
                        <input
                            id='school'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Что и когда окончил...'/>
                    </div>
                    {/* yigirma */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="phoneNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер телефона</label>
                        <input
                            id='phoneNumber'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Номер телефона...'/>
                    </div>
                    {/* yigirma bir */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="startWorkingDay" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого числа вы
                            начали работать</label>
                        <input
                            id='startWorkingDay'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='даты...'/>
                    </div>
                    {/* yigirma ikki */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="startWorkingMonth" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком месяце вы
                            начали работать</label>
                        <input
                            id='startWorkingMonth'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='месяц...'/>
                    </div>
                    {/* yigirma uch */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="startWorkingYear" className='mb-1 ml-1 mt-10 text-sm w-64'>В каком году вы
                            начали работать</label>
                        <input
                            id='startWorkingYear'
                            type='number'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='год...'/>
                    </div>
                    {/* yigirma turt */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="passportSyria" className='mb-1 ml-1 mt-10 text-sm w-64'>Паспорт серия</label>
                        <input
                            id='passportSyria'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Паспорт серия...'/>
                    </div>
                    {/* yigirma besh */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="passportNumber" className='mb-1 ml-1 mt-10 text-sm w-64'>Номер паспорта</label>
                        <input
                            id='passportNumber'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Номер паспорта...'/>
                    </div>
                    {/* yigirma olti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="dateStartWork" className='mb-1 ml-1 mt-10 text-sm w-64'>С какого дня будет
                            работать сайт</label>
                        <input
                            id='dateStartWork'
                            type='date'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='день...'/>
                    </div>
                    {/* yigirma yetti */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="maritalStatus" className='mb-1 ml-1 mt-10 text-sm w-64'>Семейное
                            положение</label>
                        <select
                            id="maritalStatus"
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'>
                            <option selected disabled>Семейная ситуация...</option>
                            <option value="Женат">Женат</option>
                            <option value="Неженат">Неженат</option>
                            <option value="Замужем">Замужем</option>
                            <option value="Незамужем">Незамужем</option>
                            <option value="Разведен">Разведен</option>
                            <option value="Разведена">Разведена</option>
                        </select>
                    </div>
                    {/* yigirma sakkiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="positionHeld" className='mb-1 ml-1 mt-10 text-sm w-64'>Занимаемая
                            должность</label>
                        <input
                            id='positionHeld'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Занимаемая должность...'/>
                    </div>
                    {/* yigirma tuqqiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="street" className='mb-1 ml-1 mt-10 text-sm w-64'>Улица</label>
                        <input
                            id='street'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Улица...'/>
                    </div>
                    {/* uttiz */}
                    <div className='flex flex-col font-inika mx-2'>
                        <label htmlFor="speciality" className='mb-1 ml-1 mt-10 text-sm w-64'>Специальность</label>
                        <input
                            id='speciality'
                            className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                            placeholder='Специальность...'/>
                    </div>
                </div>

                {/* yaqin qarindoshlari listi */}
                <h2 className='text-center mb-0 mt-8 font-inika font-bold text-xxl text-black'>Близкие родственники</h2>
                {templates.map((_, index) => (
                    <PlusUserInfo
                        i={index}
                        key={index}
                        onRemove={() => handleRemove(index)}/>
                ))}

                <div className='flex justify-center items-center mt-3'>
                    <div className='flex justify-center items-center active:scale-90 duration-300 mx-5'>
                        <button onClick={handleCreate}
                                className='bg-plussBtnBg text-white active:scale-90 duration-300 rounded-lg p-2'>
                            <Icon icon="typcn:plus" className='w-8 h-8'/>
                        </button>
                        <span onClick={handleCreate} className='cursor-pointer font-inika font-bold text-lg mx-2'>Добавить больше</span>
                    </div>
                    <div id='removeBtn' className='flex justify-center items-center active:scale-90 duration-300 mx-5'>
                        <button onClick={handleRemove}
                                className='bg-plussBtnBg text-white active:scale-90 duration-300 rounded-lg p-2'>
                            <Icon icon="typcn:minus" className='w-8 h-8'/>
                        </button>
                        <span onClick={handleRemove}
                              className='cursor-pointer font-inika font-bold text-lg mx-2'>Снять</span>
                    </div>
                </div>

                {/* save btn */}
                <div className='mt-20 flex justify-end px-24'>
                    <button
                        onClick={() => {
                            byId("goHomePage").click();
                        }}
                        className='mr-4 bg-red-600 py-2 px-7 rounded-2xl shadow-lg text-white 
                        font-inika font-bold tracking-wider hover:bg-red-700 active:scale-90 
                        duration-300'>Назад
                    </button>
                    <button
                        className={`bg-blue-600 py-2 px-7 rounded-2xl shadow-lg text-white 
                        font-inika font-bold tracking-wider hover:bg-blue-700 active:scale-90 
                        duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={addUser}
                        disabled={isLoading}>
                        {isLoading ?
                            <span className=' flex justify-center items-center'>
                                Сохранять
                                <Icon icon="eos-icons:bubble-loading" className='ml-3' width="25"/>
                            </span>
                            : "Сохранять"
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserInfo