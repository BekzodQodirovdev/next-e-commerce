import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import item1 from "../../public/item1.svg";
import item2 from "../../public/item2.svg";
import item3 from "../../public/item3.svg";

export const Footer = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-200">
                <div className="flex flex-col">
                    <Image src={item1} alt="img" />
                    <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">
                        Garden Care
                    </h3>
                    <p className="text-sm text-gray-600 max-w-[200px]">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants.
                    </p>
                </div>

                <div className="flex flex-col">
                    <Image src={item2} alt="img" />
                    <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">
                        Plant Renovation
                    </h3>
                    <p className="text-sm text-gray-600 max-w-[200px]">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants.
                    </p>
                </div>

                <div className="flex flex-col">
                    <Image src={item3} alt="img" />
                    <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">
                        Watering Garden
                    </h3>
                    <p className="text-sm text-gray-600 max-w-[200px]">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants.
                    </p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Would you like to join newsletters?
                    </h3>
                    <div className="flex mb-4">
                        <input
                            type="email"
                            placeholder="enter your email address..."
                            className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 bg-white"
                            autoComplete="off"
                            aria-label="Email address for newsletter"
                            defaultValue=""
                            style={{
                                backgroundImage: "none",
                                backgroundSize: "auto",
                                backgroundRepeat: "repeat",
                                borderTopWidth: "1px",
                                borderTopStyle: "solid",
                                borderTopColor: "rgb(209 213 219)",
                            }}
                        />
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition"
                            type="button"
                            style={{
                                borderTopWidth: "1px",
                                borderTopStyle: "solid",
                                borderTopColor: "rgb(209 213 219)",
                            }}
                        >
                            Join
                        </button>
                    </div>
                    <p className="text-sm text-gray-600">
                        We usually post offers and challenges in newsletter.
                        We're your online houseplant destination, we offer a
                        wide range of houseplants and accessories shipped
                        directly from our (green)house to yours!
                    </p>
                </div>
            </div>

            <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <Image
                            src={logo}
                            alt="GreenShop Logo"
                            width={120}
                            height={30}
                        />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        70 West Buckingham Ave.
                        <br />
                        Farmingdale, NY 11735
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        contact@greenshop.com
                    </p>
                    <p className="text-sm text-gray-600">+88 01911 717 490</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        My Account
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                My Account
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Our stores
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Contact us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Career
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Specials
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Help & Guide
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                How to Buy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Shipping & Delivery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Product Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                How to Return
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Categories
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                House Plants
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Potter Plants
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Seeds
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Small Plants
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-green-500"
                            >
                                Accessories
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Social Media
                    </h3>
                    <div className="flex space-x-4 mb-6">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500"
                        >
                            FB
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500"
                        >
                            IG
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500"
                        >
                            TW
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500"
                        >
                            LI
                        </a>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        We accept
                    </h3>
                    <div className="flex space-x-4">
                        <span className="text-gray-600">PayPal</span>
                        <span className="text-gray-600">VISA</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4">
                    <p className="text-sm text-gray-600 text-center">
                        © 2021 GreenShop. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};
