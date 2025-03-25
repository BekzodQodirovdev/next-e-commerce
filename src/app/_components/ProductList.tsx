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
        <div className="grid grid-cols-4 gap-6">
            {MockeData.map((product: any) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
