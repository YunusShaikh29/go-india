"use client";
import MarketStoriesCard from "@/components/Market-Stories-Card";
import ColdestSunset from "@/public/cloud-sunset-mountain.jpg";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface MarketStories {
    imageUrl: StaticImageData;
    title: string;
    description: string;
  }
  

const DUMMY_STORIES:MarketStories[] = [
  {
    imageUrl: ColdestSunset,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quodporro id sed enim vero minus. ",
  },
  {
    imageUrl: ColdestSunset,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quodporro id sed enim vero minus. ",
  },
  {
    imageUrl: ColdestSunset,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quodporro id sed enim vero minus. ",
  },
];



const MarketStories = () => {
    const router = useRouter();
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			setScreenWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (screenWidth <= 640) {
			router.push("/market-stories");
		} else {
			router.push("/");
		}
	}, [router, screenWidth]);
  // console.log(window.location)
  return (
    <div className="mt-[4rem] w-full">
      <ul className="flex flex-col gap-4">
        {DUMMY_STORIES.map((story, index) => (
          <MarketStoriesCard
            key={index}
            imageUrl={story.imageUrl}
            title={story.title}
            description={story.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default MarketStories;
