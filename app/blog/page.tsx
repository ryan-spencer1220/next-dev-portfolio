import Posts from "../components/Posts";

export default function Blog() {
  return (
    <div className="container mx-auto grid col-span-1 px-40 pt-10">
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold">Blog</h2>
        <Posts />
      </section>
    </div>
  );
}
