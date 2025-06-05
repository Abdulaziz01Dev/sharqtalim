import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


const Heades = ({text, description, imageSrc, agar, pN}) => {
    return (
        <div className="flex flex-col mt-16 gap-4 ">
            <h1 className={`text-2xl xl:text-3xl items-center flex text-black ${poppins.className}`}>{pN} {text}</h1>
            <p className="text-xl xl:text-2xl font-medium italic text-[#333]">{description}</p>
            <img src={imageSrc} alt={agar}/>
        </div>
    )
}
export default Heades
