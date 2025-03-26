"use client";
import { getAllProduct } from "@/service/getAllProduct";
import ProductCard from "./ProductCard";

export interface ProductT {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    picture: string[];
    description: string;
    price: number;
    quentity: number;
    is_active: boolean;
}

const MockeData = [
    {
        id: 1,
        picture: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 2,
        picture: "/product2.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 3,
        picture: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 4,
        picture: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 5,
        picture: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 6,
        picture: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
];

const ProductList = () => {
    const { data, isLoading, error } = getAllProduct();
    console.log(data);

    return (
        <div>
            <div className="flex justify-between pb-[31px]">
                <div className="flex gap-[40px]">
                    <p className="hover:text-[#46a358] cursor-pointer">
                        All Plants
                    </p>
                    <p className="hover:text-[#46a358] cursor-pointer">
                        New Arrivals
                    </p>
                    <p className="hover:text-[#46a358] cursor-pointer">Sale</p>
                </div>
                <div className="flex gap-[8px]">
                    <p>Short by:</p>
                    <select name="sort" id="sort" className="cursor-pointer">
                        <option value="default">Default sorting</option>
                        <option value="Desc">DESC</option>
                        <option value="Desc">ACK</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    data?.data?.map((product: ProductT) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
