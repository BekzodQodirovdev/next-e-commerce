"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/redux/productsSlice";
import { useEffect } from "react";
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
    const dispatch = useAppDispatch();
    const { items, status } = useAppSelector((state) => state.products);
    const { category, priceRange, size } = useAppSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredItems = items.filter((product: any) => {
        return (
            (category === "" || product.category === category) &&
            product.price >= priceRange &&
            (size.length === 0 || size.includes(product.size))
        );
    });

    // if (status === "loading") return <p>Loading products...</p>;
    // if (status === "failed") return <p>Failed to load products.</p>;

    return (
        <div className="grid grid-cols-4 gap-6">
            {MockeData.map((product: any) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
