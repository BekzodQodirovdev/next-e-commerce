import React from "react";
import ProductFilter from "./ProductFilter";
import { ProductSwapper } from "./ProductSwapper";

export const Product = () => {
    return (
        <div className="container pt-6 flex gap-6">
            <ProductFilter />
            <ProductSwapper />
        </div>
    );
};
