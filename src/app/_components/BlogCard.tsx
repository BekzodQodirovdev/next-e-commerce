import Image from "next/image";
import React from "react";

export const BlogCard = ({
    image,
    created_title,
    title,
    sub_title,
}: {
    image: string;
    created_title: string;
    title: string;
    sub_title: string;
}) => {
    return (
        <div className="max-w-[268px]">
            <Image src={image} alt={title} width={268} height={195} />
            <div className="p-[15px] bg-[#fbfbfb]">
                <p className="pb-[4px] text-[14px] text-[#46a358]">
                    {created_title}
                </p>
                <h3 className="pb-[4px] text-[20px] font-bold">{title}</h3>
                <p className="pb-[9px] text-[14px] font-normal text-[#727272]">
                    {sub_title}
                </p>
                <button className="cursor-pointer">Read More →</button>
            </div>
        </div>
    );
};
