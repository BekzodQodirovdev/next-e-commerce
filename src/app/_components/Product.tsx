import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

export const Product = () => {
    return (
        <div className="container mx-auto p-6 flex gap-6">
            <ProductFilter />
            <ProductList />
        </div>
    );
};
