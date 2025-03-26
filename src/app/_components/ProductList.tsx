"use client";
import ProductCard from "./ProductCard";

const MockeData = [
    {
        id: 1,
        image: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 2,
        image: "/product2.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 3,
        image: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 4,
        image: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 5,
        image: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
    {
        id: 6,
        image: "/product1.png",
        name: "Barberton Daisy",
        price: 119.0,
    },
];

const ProductList = () => {
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
                {MockeData.map((product: any) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
