import Image, { StaticImageData } from "next/image";
import Likes from "@/public/likes.svg";
import Views from "@/public/views.svg";
import Comments from "@/public/comments.svg";
import Share from "@/public/share.svg";

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

const DiscussionForumCard = ({
  userImage,
  description,
  firstName,
  lastName,
  likes,
  views,
  comments,
  postedBefore,
}: DiscussionForum) => {
  return (
    <div className="flex flex-col w-[100vw] md:w-full md:flex md:flex-row justify-cneter items-center shadow-md shadow-gray-400 px-4 py-2 gap-4 border">
      <div className="w-[3.6rem] h-[3.6rem] rounded-md">
        <Image src={userImage} alt={description} />
      </div>
      <div className="pl-3 flex flex-col justify-center gap-2">
        <div className="flex gap-4">
          <p className="text-sm md:text-md font-[500]">
            {firstName} {lastName}
          </p>
          <p className="px-2 py-1 rounded-full text-white bg-blue-400 text-sm font-semibold flex justify-center items-center">
            Section 2
          </p>
        <p className="ml-auto text-blue-400">{postedBefore} min ago</p>
        </div>
        <p className="w-full text-sm leading-[1.5] md:w-[85%]">{description}</p>
        <div className=" text-[.8rem] md:text-md flex gap-4 w-full justify-between select-none">
          <div className="flex items-center gap-1">
            <Image src={Likes} alt="likes" />
            <p>{likes}k</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Views} alt="views" />
            <p>{views}k</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Comments} alt="comments" />
            <p>{comments}k Comments</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Share} alt="share" />
            <p>Share</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default DiscussionForumCard;
