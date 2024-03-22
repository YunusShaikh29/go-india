import React from "react";
import Image, { StaticImageData } from "next/image";

interface MarketStories {
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

const MarketStoriesCard = ({ imageUrl, title, description }: MarketStories) => {
  return (
    <div className="ml-4 w-[95vw] md:w-full flex flex-col items-start shadow-md shadow-gray-300 border rounded-sm">
      <div className="h-[10rem] w-full p-2 md:h-[8rem]">
        <Image src={imageUrl} alt={title} className="h-full select-none rounded-tl rounded-tr" />
      </div>

      <div className="py-2 px-4 pt-0">
        <h1 className="text-[1rem] md:text-[.7rem] font-semibold">{title}</h1>
        <p className="text-[.8rem] md:text-[.6rem] leading-[1.5]">{description}</p>
      </div>
    </div>
  );
};

export default MarketStoriesCard;
