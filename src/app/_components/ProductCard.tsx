import Image from "next/image";
import { FC } from "react";
import { BascketImg } from "../../../public/bascket";
import { HeardImg } from "../../../public/heard";
import { SearchIcon } from "../../../public/search";

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
}

const ProductCard: FC<ProductCardProps> = ({ image, name, price }) => {
    return (
        <div className="group relative border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer">
            <div className="relative">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    className="mx-auto"
                />

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer">
                        <BascketImg />
                    </button>
                    <button className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer">
                        <HeardImg />
                    </button>
                    <button className="bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer">
                        <SearchIcon />
                    </button>
                </div>
            </div>

            <p className="text-gray-700 mt-3 text-center">{name}</p>

            <p className="text-green-600 font-bold text-lg text-center">
                ${price.toFixed(2)}
            </p>

            <div className="absolute top-0 left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300"></div>
        </div>
    );
};

export default ProductCard;
