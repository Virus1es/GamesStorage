import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed px-[1rem] py-6 top-0 min-w-screen bg-transparent shadow-lg z-1000">
            <nav className="flex justify-between items-center text-white text-2xl font-extrabold">
                <Link href="/">Games Storage</Link>
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
