import React from "react";
import Image from "next/image";
import advertisingImg1 from "../../../public/advertising1.png";
import advertisingImg2 from "../../../public/advertising2.png";

export const Advertising = () => {
    return (
        <div className="container mx-auto py-[94px]">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative flex items-center bg-white p-6 rounded-lg overflow-hidden border border-gray-200">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[292px] h-[292px]">
                        <Image
                            src={advertisingImg1}
                            alt="Summer cactus and succulents"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="ml-auto w-1/2 pl-4">
                        <h2 className="text-lg font-bold pb-2">
                            SUMMER CACTUS & SUCCULENTS
                        </h2>
                        <p className="pb-4 text-gray-600">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants
                        </p>
                        <button className="py-2 px-6 text-gray-600 rounded-md border border-gray-300 hover:bg-gray-50 transition cursor-pointer">
                            Find More →
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center bg-white p-6 rounded-lg overflow-hidden border border-gray-200">
                    {/* Image (Left Side) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[292px] h-[292px]">
                        <Image
                            src={advertisingImg2}
                            alt="Styling trends and more"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="ml-auto w-1/2 pl-4">
                        <h2 className="text-lg font-bold pb-2">
                            STYLING TRENDS & MUCH MORE
                        </h2>
                        <p className="pb-4 text-gray-600">
                            We are an online plant shop offering a wide range of
                            cheap and trendy plants
                        </p>
                        <button className="py-2 px-6 text-gray-600 rounded-md border border-gray-300 hover:bg-gray-50 transition cursor-pointer">
                            Find More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
