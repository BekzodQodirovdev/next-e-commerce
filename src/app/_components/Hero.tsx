"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
    {
        id: 1,
        top_title: "Welcome to GreenShop",
        title: "Let's Make a Better Planet",
        text: "We are an online plant shop offering a wide range of cheap and trendy plants.",
        button: "SHOP NOW",
        image: "/hero.png",
    },
    {
        id: 2,
        top_title: "Welcome to GreenShop",
        title: "BRING NATURE INTO YOUR HOME",
        text: "Transform your living space with our fresh, vibrant plants.",
        button: "SHOP NOW",
        image: "/hero.png",
    },
    {
        id: 3,
        top_title: "Welcome to GreenShop",
        title: "BRING NATURE INTO YOUR HOME",
        text: "Transform your living space with our fresh, vibrant plants.",
        button: "SHOP NOW",
        image: "/hero.png",
    },
];

export const Hero = () => {
    return (
        <div className="mt-[18px] container bg-[#fafafa] pl-10">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex items-center justify-between">
                            <div className="max-w-md">
                                <p className="pt-[62px] pb-[7px]">
                                    {slide.top_title}
                                </p>
                                <h2 className="text-[50px] font-black leading-tight pb-[5px]">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-600">{slide.text}</p>
                                <button className="mt-14 mb-[91px] bg-[#46A358] text-white px-6 py-3 rounded-md">
                                    {slide.button}
                                </button>
                            </div>
                            <div>
                                <img
                                    src={slide.image}
                                    alt="hero"
                                    className="w-[400px]"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
