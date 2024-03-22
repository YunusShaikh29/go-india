"use client";
import Image from "next/image";
import DiscussionForum from "../components/DiscussionForum";
import MarketStories from "../components/MarketStories";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
 const router = useRouter()
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Check if window object is defined before accessing window properties
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Access window properties only in the browser environment
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Redirect based on screen width
    if (screenWidth <= 640) {
      router.push("/discussion-forum");
    } else {
      router.push("/");
    }
  }, [router, screenWidth]);

  return (
    <main className="flex gap-[7%] w-full">
      <Sidebar />
      <div className="flex gap-[8%] mt-2">
        <DiscussionForum />
        <MarketStories />
      </div>
    </main>
  );
}
