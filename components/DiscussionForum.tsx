"use client"
import DiscussionForumCard from "@/components/Discussion-Forum-Card";
import userImage from "@/public/user.png"

const DUMMY_USERS = [
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

const DiscussionForum = () => {
  return (
    <div className="w-full">
        <h1 className="hidden md:block text-2xl text-red-500 px-4 py-1 uppercase w-fit bg-slate-200 font-[500] mb-4">Discussion Forum</h1>
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

export default DiscussionForum;
