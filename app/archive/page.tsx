"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { DM_Sans } from "next/font/google";
import { HashLoader } from "react-spinners";

const dmsans = DM_Sans({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const endpoint = "https://fractalchaos.in/graphql";
const headers = {
  "Content-Type": "application/json",
};
const graphqlQuery = {
  query: `query NewQuery {
    posts {
      nodes {
        id
        title
        content
        date
      }
    }
  }`,
};

const Work = () => {
  const [posts, setPosts] = useState<
    { id: string; title: string; content: string; date: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post(endpoint, graphqlQuery, { headers });

        console.log("Full API response:", response.data);

        // ✅ Safeguard against undefined values
        const postData = response.data?.data?.posts?.nodes || [];

        if (postData.length === 0) {
          console.warn("⚠️ No posts found in API response.");
        }

        setPosts(postData);
      } catch (error) {
        console.error("❌ Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center bg-stone-900">
      <NavBar white whiteLogo/>
      <div className="flex flex-col gap-2 w-full">
        {loading ? (
          <div className="w-full flex flex-col items-center justify-center">
          <HashLoader color="#ffffff"/>
          </div>
        ) : posts.length > 0 ? (
          <div className="flex justify-between px-20">
            <div className="flex flex-col gap-2 items-start">
              {posts.map((post) => (
                <a href={`/archive/${post.id}`} key={post.id} className="border-gray-300 rounded-md">
                  <h2
                    className={`text-xl font-medium tracking-tighter ${dmsans.className}`}
                  >
                    {post.title}
                  </h2>
                  <p className={`text-stone-500 ${dmsans.className}`}>
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </a>
              ))}
            </div>
            <div className="flex flex-col items-end">
            <div className="flex flex-col gap-3">
              <h1
                className={`${dmsans.className} uppercase text-xl text-stone-400 font-medium`}
              >
                Categories
              </h1>
              <div className="flex flex-col items-start">
                <p className={`${dmsans.className} text-white`}></p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1
                className={`${dmsans.className} uppercase text-xl text-stone-400 font-medium`}
              >
                Years
              </h1>
              <div className="flex flex-col items-start">
                <p className={`${dmsans.className} text-white`}></p>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Work;
