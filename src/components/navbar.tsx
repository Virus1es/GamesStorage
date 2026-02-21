import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="fixed px-[1rem] py-3 top-0 min-w-screen bg-transparent shadow-lg z-1000">
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
                    <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Профиль</Link>
                    </li>
                    <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Магазин</Link>
                    </li>
                    <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
                        <Link href="#">Поиск</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
