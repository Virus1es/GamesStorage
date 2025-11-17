import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed px-[1rem] py-6 top-0 min-w-screen bg-transparent shadow-lg z-1000">
      <nav className="flex justify-between items-center text-white text-2xl font-extrabold">
        <Link href="/">Games Storage</Link>
        <ul className="flex gap-x-[1rem]">
          <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
            <a href="#">Профиль</a>
          </li>
          <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
            <a href="#">Магазин</a>
          </li>
          <li className="text-base font-bold transition duration-1000 hover:text-gray-400">
            <a href="#">Поиск</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
