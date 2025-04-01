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
                        <div>
                            <h3 className="pb-[21px]">{data?.data?.name}</h3>
                            <p className="pb-[10px]">Short Description:</p>
                            <p className="pb-[24px]">
                                The ceramic cylinder planters come with a wooden
                                stand to help elevate your plants off the
                                ground. The ceramic cylinder planters come with
                                a wooden stand to help elevate your plants off
                                the ground.
                            </p>
                            <p className="pb-[10px]">Size:</p>
                            <div className="flex gap-[10px]">
                                <div className="px-[8] py-[6px] border border-[#eaeaea] rounded-2xl">
                                    S
                                </div>
                                <div className="px-[8] py-[6px] border border-[#eaeaea] rounded-2xl">
                                    M
                                </div>
                                <div className="px-[8] py-[6px] border border-[#eaeaea] rounded-2xl">
                                    L
                                </div>
                                <div className="px-[8] py-[6px] border border-[#eaeaea] rounded-2xl">
                                    XL
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetaul;
