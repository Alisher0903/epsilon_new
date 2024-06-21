import {Icon} from "@iconify/react";
import axios from "axios";
import {useEffect, useState} from "react";
import {config, setConfig, url} from "../api";

function TableUSer() {
    const [userTable, setUserTable] = useState([]);

    useEffect(() => {
        setConfig();
        getUserTable();
    }, []);

    // getUserTable
    const getUserTable = () => {
        let userInfoID = sessionStorage.getItem("userInID",);
        axios.get(url + "user/" + userInfoID, config)
            .then(res => setUserTable(res.data.body.relationshipDtos))
            .catch(() => console.log("kelmadi!"))
    }
    return (
        <div className="flex flex-col pb-10">
            <h1 className="text-center mt-20 mb-8 font-inika font-bold tracking-wide text-4xl">Близкие родственники</h1>
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-lg rounded-2xl">
                        <table className="min-w-full">
                            <thead className="g-gray-100 border-b">
                            <tr className="bg-gray-800 text-white">
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">№</th>
                                <th scope="col" className="text-sm font-medium px-0 py-2 text-left">Близкие родственники</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Фамилия</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Имя</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Отечество</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Место рождения (область)</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">День рождения</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Месяц рождения</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Год рождения</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Место работы</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Должность</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Адрес: г.</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Область</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Район</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Поселок</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Улица</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">ССГ</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">МСГ</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Дом</th>
                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">Квар-тира</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userTable.length !== 0 ?
                                userTable.map((item, i) =>
                                    <tr className=" bg-slate-100 text-sm even:bg-slate-200 border-b hover:bg-slate-300 duration-150">
                                        <th className="text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{i + 1}</th>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.closeRelatives}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.lastName}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.firstName}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.middleName}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.placeOfBirth}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.day}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.month}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.year}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.placeOfWork}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.jobTitle}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.addressCity}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.region}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.district}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.village}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.street}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.ccg}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.mcg}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.home}</td>
                                        <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.flat}</td>
                                    </tr>
                                ) : (
                                    <tr className="bg-white-100 border-b hover:bg-slate-200 duration-150">
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2 text-center text-sm font-medium text-gray-900">
                                            <Icon icon="eos-icons:three-dots-loading" width="100" height="70"/>
                                        </td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                        <td className="px-5 py-2"></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableUSer;
