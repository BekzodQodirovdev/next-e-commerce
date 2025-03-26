"use client"; // Redux ishlatilgani uchun Client Component

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCategory, setPriceRange, setSize } from "@/redux/filterSlice";
import Image from "next/image";
import superSaleImg from "../../../public/SuperSaleBanner.png";

const categories = ["House Plants", "Potted Plants", "Succulents", "Ferns"];
const sizes = ["Small", "Medium", "Large"];

const ProductFilter = () => {
    const dispatch = useAppDispatch();
    const { category, priceRange, size } = useAppSelector(
        (state) => state.filters
    );

    return (
        <div className="w-[250px]">
            <div className="p-4 bg-[#fbfbfb]">
                <h2 className="text-xl font-semibold mb-4">Filter</h2>

                <div className="mb-4">
                    <h3 className="font-medium mb-2">Category</h3>
                    {categories.map((cat) => (
                        <label key={cat} className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                checked={category === cat}
                                onChange={() => dispatch(setCategory(cat))}
                                className="mr-2"
                            />
                            {cat} ({1})
                        </label>
                    ))}
                </div>

                <div className="mb-4">
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <input
                        type="range"
                        min="1"
                        max="999"
                        value={priceRange}
                        onChange={(e) =>
                            dispatch(setPriceRange(Number(e.target.value)))
                        }
                        className="w-full"
                    />
                    <p className="text-sm text-gray-500">${priceRange}+</p>
                </div>

                <div>
                    <h3 className="font-medium mb-2">Size</h3>
                    {sizes.map((s) => (
                        <label key={s} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={size.includes(s)}
                                onChange={() => dispatch(setSize(s))}
                                className="mr-2"
                            />
                            {s}
                        </label>
                    ))}
                </div>
            </div>
            <Image src={superSaleImg} alt="super sale UP TO 75% OFF" />
        </div>
    );
};

export default ProductFilter;
