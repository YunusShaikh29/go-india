"use client"
import DiscussionForumCard from "@/components/Discussion-Forum-Card";
import userImage from "@/public/user.png"
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface DiscussionForum {
    userImage: StaticImageData;
    firstName: string;
    lastName: string;
    //   badge: string;
    description: string;
    postedBefore: number;
    likes: number;
    views: number;
    comments: number;
  }

const DUMMY_USERS: DiscussionForum[] = [
  {
    userImage: userImage,
    firstName: "Lorem",
    lastName: "Ispum",
    //   badge: "string",
    description:
      "Lorem Ispum is simply a dummy text of the priting and typesetting industry. Lorem ispum is. typesetting industry. Lorem ispum is",
    postedBefore: 2,
    likes: 2,
    views: 2,
    comments: 2,
  },
  {
    userImage: userImage,
    firstName: "Lorem",
    lastName: "Ispum",
    //   badge: "string",
    description:
      "Lorem Ispum is simply a dummy text of the priting and typesetting industry. Lorem ispum is. typesetting industry. Lorem ispum is",
    postedBefore: 2,
    likes: 2,
    views: 2,
    comments: 2,
  },
  {
    userImage: userImage,
    firstName: "Lorem",
    lastName: "Ispum",
    //   badge: "string",
    description:
      "Lorem Ispum is simply a dummy text of the priting and typesetting industry. Lorem ispum is. typesetting industry. Lorem ispum is",
    postedBefore: 2,
    likes: 2,
    views: 2,
    comments: 2,
  },
  {
    userImage: userImage,
    firstName: "Lorem",
    lastName: "Ispum",
    //   badge: "string",
    description:
      "Lorem Ispum is simply a dummy text of the priting and typesetting industry. Lorem ispum is. typesetting industry. Lorem ispum is",
    postedBefore: 2,
    likes: 2,
    views: 2,
    comments: 2,
  },
  
];

const Page = () => {
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
		// Redirecting based on screen width
		if (screenWidth <= 640) {
			router.push("/discussion-forum");
		} else {
			router.push("/");
		}
	}, [router, screenWidth]);

  return (
    <div className="w-full mt-[5rem]">
      <ul className="flex flex-col gap-8">
        {DUMMY_USERS.map((user, index) => (
          <DiscussionForumCard
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            postedBefore={user.postedBefore}
            comments={user.comments}
            likes={user.likes}
            description={user.description}
            userImage={user.userImage}
            views={user.views}
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
