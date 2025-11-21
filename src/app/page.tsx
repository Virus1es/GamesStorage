import Navbar from '@/app/_components/navbar';
import GameCarousel from '@/app/_components/game-carousel';

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <main className="min-h-screen max-w-screen py-32 px-16 bg-white dark:bg-black sm:items-start">
                <GameCarousel />
                {/* <StoreGrid />*/}
            </main>
        </div>
    );
}
