import React, { useState } from 'react';
import QRCode from 'qrcode.react';


const Front = ({ userData }) => {

    const [showQR, setShowQR] = useState(false);

    const handleQR = (Option) => {
        setShowQR(Option)
    }


    return (
        <div className="bg-black">
            {userData ? (
                <div className=" flex justify-center items-center min-h-screen">
                    <div className="flex p-10 bg-gradient-to-tr from-[#d5bdaf] to-[#e3d5ca] rounded-3xl" >
                        <div className="flex gap-10 ">
                            <div className=" mt-6 w-24 h-24 " >
                                <img src={userData.picture.large} alt="User Image" className=" object-cover border border-black rounded-full" />
                            </div>
                            <div className=" ">
                                <div className="flex gap-1 font-serif text-lg">
                                    <p>{userData.name.title}</p>
                                    <h1>{userData.name.first} </h1>
                                    <h1>{userData.name.last}</h1>
                                </div>
                                <div className=" flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 245" strokeWidth="1.5" stroke="currentColor" className="  w-4 h-4 hover:scale-110">
                                        <path d="M196.666,93.047V76.445h10v-21h-10v-15h-25v15h-11v21h11v16.424c-29,5.64-51.581,31.564-51.581,62.617   c0,35.162,28.69,63.769,63.852,63.769c35.163,0,63.645-28.606,63.645-63.769C247.582,124.769,225.666,99.059,196.666,93.047z    M184.021,194.254c-21.377,0-38.769-17.392-38.769-38.769c0-21.378,17.392-38.77,38.769-38.77c21.378,0,38.77,17.392,38.77,38.77   C222.79,176.863,205.399,194.254,184.021,194.254z" />
                                        <path d="M127.581,91.404c0-35.162-28.523-63.769-63.686-63.769S0,56.242,0,91.404c0,31.068,22.666,57.003,51.666,62.625v27.99   l-8.184-7.057l-13.471,16.039l34.295,28.945l35.335-28.831l-13.437-16.268l-9.537,7.658v-28.674   C105.666,147.804,127.581,122.105,127.581,91.404z M25.208,91.404c0-21.377,17.392-38.769,38.77-38.769s38.77,17.392,38.77,38.769   c0,21.378-17.392,38.77-38.77,38.77S25.208,112.782,25.208,91.404z" />
                                    </svg>
                                    <p>{userData.gender}</p>
                                </div>

                                <div className=" flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:scale-110">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <p>{userData.phone}</p>
                                </div>

                                <div className=" flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:scale-110">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <p>{userData.email}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:scale-110">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                                    </svg>
                                    <p>{userData.dob.age} Years</p>
                                </div>
                                <div className=" flex items-center gap-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:scale-110">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p>{userData.location.country}</p>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => handleQR(true)} onMouseLeave={() => handleQR(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                            <div className={` absolute  ${showQR ? ' ' : 'hidden'}`}>
                                <div className=" ml-6">
                                    {userData &&  (
                                        <QRCode value={`Name:${userData.name.first} ${userData.name.last}, Gender: ${userData.gender}, Phone: ${userData.phone}, Email: ${userData.email}, Date of Birth: ${userData.dob.date}, Latitude: ${userData.location.coordinates.latitude}, Longitude: ${userData.location.coordinates.longitude}`} className=' p-2  bg-white ' size={100} />
                                    )}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="border-t-4 border-blue-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
                </div>
            )}
        </div>
    );
}

export default Front;
