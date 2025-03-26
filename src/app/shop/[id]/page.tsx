"use client";

import { getOneProduct } from "@/service/getOneProducts";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShopDetaul = () => {
    const { id }: { id: string } = useParams();

    const { data, isLoading } = getOneProduct(id);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="container">
            <div className="pt-[36px] pb-[128px]">
                <div className="flex gap-2 pb-[43px]">
                    <Link href={"/"}>Home</Link>
                    <p>/</p>
                    <Link href={"/shop"}>Shop</Link>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <div></div>
                        <div>
                            {data?.data && data.data.picture[0] ? (
                                <Image
                                    src={data?.data.picture[0]}
                                    alt={data.data.name || "Product Image"}
                                    width={300}
                                    height={300}
                                    className="rounded-lg"
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetaul;
