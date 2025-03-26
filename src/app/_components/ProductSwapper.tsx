import React from "react";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import { getAllProduct } from "@/service/getAllProduct";
import ProductList from "./ProductList";

export const ProductSwapper = async () => {
    const client = new QueryClient();
    await client.prefetchQuery({
        queryKey: ["products"],
        queryFn: getAllProduct,
    });
    const hydrateClient = dehydrate(client);
    return (
        <HydrationBoundary state={hydrateClient}>
            <ProductList />
        </HydrationBoundary>
    );
};
