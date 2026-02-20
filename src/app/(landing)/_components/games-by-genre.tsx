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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="text-xl md:text-4xl my-4 text-center">
                <h4>{genreName}</h4>
            </div>
            <div className="slider-container mx-auto">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <Image
                                src={'/games/' + item.src}
                                alt={item.title}
                                width={200}
                                height={200}
                                className="w-fit"
                            />
                            <p
                                className={`text-center mt-3 text-base md:text-3xl ${merriweather.variable}`}
                            >
                                {item.title}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
            <hr className="my-4" />
        </>
    );
}
