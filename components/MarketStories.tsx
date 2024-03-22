"use client";
import MarketStoriesCard from "@/components/Market-Stories-Card";
import ColdestSunset from "@/public/cloud-sunset-mountain.jpg";

const DUMMY_STORIES = [
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
  // console.log(window.location)
  return (
    <div className="w-[25%] sm:mr-8">
         <h1 className="hidden sm:block sm:w-fit text-[100%] text-red-500 px-4 py-1 uppercase w-fit bg-slate-200 font-[500] mb-4">Market stories</h1>
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
