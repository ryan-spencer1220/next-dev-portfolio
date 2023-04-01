import React from "react";
import ListItem from "../components/ListItem";
import { getSortedPostsData } from "@/lib/posts";

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto grid col-span-1 px-40 pt-10">
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold">Blog</h2>
        <ul className="w-full">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
}
