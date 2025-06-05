import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


const OrderedList = ({wis, wos, mainText, oImage, oAlter}) => {
    return (
        <div className="flex flex-col mx-10 gap-2 mb-5 ">
            <h1 className={`text-2xl xl:text-3xl items-center flex text-black ${poppins.className}`}><p>{wis}</p><i className="bx bx-chevron-right"></i>{wos}</h1>
            <h2 className="text-lg xl:text-xl font-medium text-[#333] italic">{mainText}</h2>
            <img src={oImage} alt={oAlter}/>
        </div>
    )
}
export default OrderedList
