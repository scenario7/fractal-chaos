"use client"; // Required for fetching & state in Next.js App Router

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import to get dynamic route params
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

const PostPage = () => {
  const params = useParams();
  const postId = params?.postID as string; // Get postID from URL

  const [post, setPost] = useState<{ id: string; title: string; content: string; date: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return; // Prevent fetching without an ID

    const fetchPost = async () => {
      try {
        const graphqlQuery = {
          query: `query NewQuery { postBy(id: "${postId}") { id title content date } }`,
        };

        const response = await axios.post(endpoint, graphqlQuery, { headers });

        console.log("Fetched Post:", response.data);
        const postData = response.data?.data?.postBy;

        if (!postData) {
          console.warn("⚠️ No post found with this ID.");
        }

        setPost(postData);
      } catch (error) {
        console.error("❌ Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // Re-fetch when postID changes

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center bg-stone-900">
      <NavBar white />

      <div className="py-10 text-white w-full flex items-center justify-between">
        {loading ? (
          <div className="w-full flex flex-col items-center justify-center">
          <HashLoader color="#ffffff"/>
          </div>        ) : post ? (
          <div className="rounded-md px-20">
            <h2 className={`text-3xl font-bold ${dmsans.className}`}>{post.title}</h2>
            <p className="text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ) : (
          <p>No post found.</p>
        )}
      </div>
      <div>

      </div>
    </div>
  );
};

export default PostPage;
