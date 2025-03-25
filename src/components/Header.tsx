import React from "react";
import logo from "../../public/logo.svg";
import searchIcon from "../../public/search.svg";
import bascketIcon from "../../public/bascket.svg";
import exitIcon from "../../public/exit.svg";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <div className="container">
            <div className="border-b border-[#a2d1ab]">
                <div className="flex justify-between items-center py-6">
                    <Link href={"/"}>
                        <Image src={logo} alt="logo" width={150} height={40} />
                    </Link>

                    <nav className="flex gap-10 text-[16px] font-medium">
                        <Link
                            href={"/"}
                            className="relative after:block after:w-full after:h-[2px] after:bg-[#46A358] after:mt-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/shop"}
                            className="relative after:block after:w-full after:h-[2px] after:bg-[#46A358] after:mt-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                        >
                            Shop
                        </Link>
                        <Link
                            href={"/plant-care"}
                            className="relative after:block after:w-full after:h-[2px] after:bg-[#46A358] after:mt-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                        >
                            Plant Care
                        </Link>
                        <Link
                            href={"/blogs"}
                            className="relative after:block after:w-full after:h-[2px] after:bg-[#46A358] after:mt-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                        >
                            Blogs
                        </Link>
                    </nav>

                    <div className="flex items-center gap-6">
                        <button className="cursor-pointer">
                            <Image
                                src={searchIcon}
                                alt="search"
                                width={20}
                                height={20}
                            />
                        </button>

                        <button className="cursor-pointer relative">
                            <Image
                                src={bascketIcon}
                                alt="basket"
                                width={24}
                                height={24}
                            />
                            <span className="absolute -top-1 -right-2 w-[15px] h-[15px] flex items-center justify-center rounded-full bg-[#46A358] text-white text-[10px]">
                                0
                            </span>
                        </button>

                        <button className="bg-[#46A358] flex items-center gap-2 text-white px-4 py-2 rounded-md font-medium">
                            <Image
                                src={exitIcon}
                                alt="exit"
                                width={16}
                                height={16}
                            />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
