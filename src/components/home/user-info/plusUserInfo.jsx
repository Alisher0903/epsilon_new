import React from 'react';

const PlusUserInfo = ({i}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center pb-6 mt-10'>
                {/* bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="lastName" className='mb-1 ml-1 mt-6 text-sm w-64'>Фамилия</label>
                    <input
                        id={`lastName${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Фамилия...' />
                </div>
                {/* ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="firstName" className='mb-1 ml-1 mt-6 text-sm w-64'>Имя</label>
                    <input
                        id={`firstName${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Имя...' />
                </div>
                {/* uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="middleName" className='mb-1 ml-1 mt-6 text-sm w-64'>Отечество</label>
                    <input
                        id={`middleName${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Отечество...' />
                </div>
                {/* turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="closeRelatives" className='mb-1 ml-1 mt-6 text-sm w-64'>Близкие родственники</label>
                    <input
                        id={`closeRelatives${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Близкие родственники...' />
                </div>
                {/* besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="day" className='mb-1 ml-1 mt-6 text-sm w-64'>день рождения</label>
                    <input
                        id={`day${i}`}
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='день рождения...' />
                </div>
                {/* olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="month" className='mb-1 ml-1 mt-6 text-sm w-64'>месяц рождения</label>
                    <input
                        id={`month${i}`}
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='месяц рождения...' />
                </div>
                {/* yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="year" className='mb-1 ml-1 mt-6 text-sm w-64'>год рождения</label>
                    <input
                        id={`year${i}`}
                        type='number'
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='год рождения...' />
                </div>
                {/* sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="placeOfBirth" className='mb-1 ml-1 mt-6 text-sm w-64'>Место рождения</label>
                    <input
                        id={`placeOfBirth${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Место рождения...' />
                </div>
                {/* tuqqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="addressCity" className='mb-1 ml-1 mt-6 text-sm w-64'>Адрес: г.</label>
                    <input
                        id={`addressCity${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Адрес: г....' />
                </div>
                {/* o'n */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="region" className='mb-1 ml-1 mt-6 text-sm w-64'>Область</label>
                    <input
                        id={`region${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Область...' />
                </div>
                {/* un bir */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="district" className='mb-1 ml-1 mt-6 text-sm w-64'>Район</label>
                    <input
                        id={`district${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Район...' />
                </div>
                {/* un ikki */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="village" className='mb-1 ml-1 mt-6 text-sm w-64'>Поселок</label>
                    <input
                        id={`village${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Поселок...' />
                </div>
                {/* un uch */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="mcg" className='mb-1 ml-1 mt-6 text-sm w-64'>МСГ</label>
                    <input
                        id={`mcg${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='МСГ...' />
                </div>
                {/* un turt */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="ccg" className='mb-1 ml-1 mt-6 text-sm w-64'>ССГ</label>
                    <input
                        id={`ccg${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='ССГ...' />
                </div>
                {/* un besh */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="home" className='mb-1 ml-1 mt-6 text-sm w-64'>Дом</label>
                    <input
                        id={`home${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Дом...' />
                </div>
                {/* un olti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="flat" className='mb-1 ml-1 mt-6 text-sm w-64'>Квар-тира</label>
                    <input
                        id={`flat${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Квар-тира...' />
                </div>
                {/* un yetti */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="street" className='mb-1 ml-1 mt-6 text-sm w-64'>Улица</label>
                    <input
                        id={`street${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Улица...' />
                </div>
                {/* un sakkiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="placeOfWork" className='mb-1 ml-1 mt-6 text-sm w-64'>Место работы</label>
                    <input
                        id={`placeOfWork${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Место работы...' />
                </div>
                {/* un toqqiz */}
                <div className='flex flex-col font-inika mx-2'>
                    <label htmlFor="jobTitle" className='mb-1 ml-1 mt-6 text-sm w-64'>Должность</label>
                    <input
                        id={`jobTitle${i}`}
                        className='shadow-lg px-3 py-2 w-64 rounded-lg bg-addInputBg placeholder:text-gray-700 focus:outline-blue-700 duration-200'
                        placeholder='Должность...' />
                </div>
            </div>
        </>
    )
}

export default PlusUserInfo