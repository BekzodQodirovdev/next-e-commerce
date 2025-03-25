import React from "react";
import { BlogCard } from "./BlogCard";

const postData = [
    {
        id: 1,
        image: "/blog1.png",
        created_title: "September 12  I Read in 6 minutes",
        title: "Cactus & Succulent Care Tips",
        sub_title:
            "Cacti are succulents are easy care plants for any home or patio. ",
    },
    {
        id: 2,
        image: "/blog2.png",
        created_title: "September 13  I Read in 2 minutes",
        title: "Top 10 Succulents for Your Home",
        sub_title: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
        id: 3,
        image: "/blog3.png",
        created_title: "September 15  I Read in 3 minutes",
        title: "Cacti & Succulent  Care Tips",
        sub_title:
            "Cacti are succulents are easy care plants for any home or patio. ",
    },
    {
        id: 4,
        image: "/blog4.png",
        created_title: "September 15  I Read in 2 minutes",
        title: "Best Houseplants Room by Room",
        sub_title: "The benefits of houseplants are endless. In addition to..",
    },
];

export const Blog = () => {
    return (
        <div className="container pb-[100px]">
            <h2 className="text-center text-[30px] text-[#3d3d3d] font-bold">
                Our Blog Posts
            </h2>
            <p className="text-center text-[14px] text-[#727272] pt-[15px] pb-[35px]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
            </p>
            <div className="flex justify-between">
                {postData.map((item) => (
                    <BlogCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
