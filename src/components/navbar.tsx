'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // ← Появляется после 50px прокрутки
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`
            fixed px-[1rem] pt-4 pb-3 top-0 min-w-screen bg-transparent shadow-lg z-1000 
            ${
                isScrolled
                    ? 'bg-black/70 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent shadow-none'
            }`}
        >
            <nav className="flex justify-between items-center text-white text-xl md:text-2xl font-extrabold">
                <div className="flex flex-row items-center">
                    <Image
                        src="/icon.png"
                        alt="Main site icon"
                        width={50}
                        height={50}
                        className="w-fit"
                    />
                    <Link href="/">Games Storage</Link>
                </div>
                <ul className="flex gap-x-[1rem] me-6">
                    <li className="text-base md:text-xl font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Профиль</Link>
                    </li>
                    <li className="text-base md:text-xl font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Магазин</Link>
                    </li>
                    <li className="text-base md:text-xl font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Поиск</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
