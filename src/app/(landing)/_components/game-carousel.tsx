'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    variable: '--font-merriweather',
    subsets: ['latin'],
});

export default function GameCarousel() {
    const images = [
        { src: 'cyberpunk.jpg', title: 'Cyberpunk 2077' },
        { src: 'darkSouls.jpg', title: 'Dark Souls 3' },
        { src: 'witcher.jpeg', title: 'The Witcher 3: Wild Hunt' },
    ];

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        adaptiveHeight: true,
    };

    return (
        <div className="slider-container max-w-4xl mx-auto">
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
    );
}
