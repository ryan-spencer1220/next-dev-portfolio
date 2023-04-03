import ListItem from "./ListItem";
import { getSortedPostsData } from "@/lib/posts";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <ul className="w-full">
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
