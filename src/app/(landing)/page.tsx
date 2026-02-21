import Navbar from '@/components/navbar';
import GameCarousel from '@/app/(landing)/_components/game-carousel';
import GamesByGenre from '@/app/(landing)/_components/games-by-genre';

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <main className="min-h-screen max-w-screen py-32 px-16 bg-white dark:bg-black sm:items-start">
                <GameCarousel />
                <hr className="my-6" />
                <GamesByGenre genreName={'Экшен'} />
                <GamesByGenre genreName={'РПГ'} />
                <GamesByGenre genreName={'Хоррор'} />
                {/* <StoreGrid />*/}
            </main>
        </div>
    );
}
