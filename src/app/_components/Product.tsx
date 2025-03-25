import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

export const Product = () => {
    return (
        <div className="container pt-6 flex gap-6">
            <ProductFilter />
            <ProductList />
        </div>
    );
};
