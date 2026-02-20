'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    variable: '--font-merriweather',
    subsets: ['latin'],
});

export default function GamesByGenre({ genreName }: string) {
    const images = [
        { src: 'cyberpunk.jpg', title: 'Cyberpunk 2077' },
        { src: 'darkSouls.jpg', title: 'Dark Souls 3' },
        { src: 'witcher.jpeg', title: 'The Witcher 3: Wild Hunt' },
        { src: 'cyberpunk.jpg', title: 'Cyberpunk 2077' },
        { src: 'darkSouls.jpg', title: 'Dark Souls 3' },
        { src: 'witcher.jpeg', title: 'The Witcher 3: Wild Hunt' },
        { src: 'cyberpunk.jpg', title: 'Cyberpunk 2077' },
        { src: 'darkSouls.jpg', title: 'Dark Souls 3' },
        { src: 'witcher.jpeg', title: 'The Witcher 3: Wild Hunt' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };

    return (
        <>
            <div className="text-4xl my-4">
                <h4>{genreName}</h4>
            </div>
            <div className="slider-container mx-auto">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.title} className="grid grid-cols-2">
                            <Image
                                src={'/games/' + item.src}
                                alt={item.title}
                                width={800}
                                height={800}
                                className="w-full"
                            />
                            <p
                                className={`text-center mt-3 text-3xl ${merriweather.variable}`}
                            >
                                {item.title}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
