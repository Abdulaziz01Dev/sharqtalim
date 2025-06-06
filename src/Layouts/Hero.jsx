import React from 'react'
import Heades from "@/Components/Heades";
import OrderedList from "@/Components/OrderedList";
import Frontend from "@/Components/ui/Frontend";
import Frontend02 from "@/Components/ui/Frontend02";

const Hero = () => {
    return (
        <div className="w-full h-full mt-32 dark-light-text "> {/* bu uzun kontent scroll qilish uchun */}
            <h1 className="text-5xl font-mono text-black" data-aos="fade-up" data-aos-delay="200">Assalomu, Alaykum</h1>
            <h4 className="text-[#333] font-mono text-3xl my-1" data-aos="fade-up" data-aos-delay="400">Men Abdulaziz Vohobjonov</h4>
            <Frontend />
            <Frontend02 />
        </div>
    )
}
export default Hero
