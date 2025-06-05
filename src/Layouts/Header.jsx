import React from 'react'

const Header = () => {
    return (
        <div className="w-full gap-4 items-center h-[5vh] justify-evenly flex bg-[#c9c5bd] z-[100] rounded-full shadow-sm shadow-black sticky top-0 left-0 mt-5">
            <div className="flexitems-center justify-between">
                {/* Bu rasm faqat dark mode-da ko‘rinadi */}
                <img
                    src="/Icon.png"
                    alt="Bu yerda mening iconim bor!"
                    className="w-24 h-24 xl:w-34 xl:h-34"
                />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex items-center gap-4 text-gray-950 text-lg xl:gap-10 xl:text-2xl">
                    <li><a href="/">Asosiy</a></li>
                    <li><a href="/Project">Proyektlar</a></li>
                    <li><a href="/Contact">Bog'lanish</a></li>
                    <li><a href="/About">Biz Haqimizda</a></li>
                </ul>
            </div>
            <div className="flex items-center">
                <button className="hidden xl:flex dark:bg-gray-50 bg-gray-800 text-white dark:text-black text-md font-bold py-2 px-5 rounded-full items-center justify-center">
                    Bog'lanish
                </button>
            </div>

        </div>
    )
}
export default Header
