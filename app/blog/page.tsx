import React from "react";
import Image from "next/image";
import Thumbnail1 from "../../public/blog-thumbnails/blog-post-1.webp";
import Thumbnail2 from "../../public/blog-thumbnails/blog-post-2.webp";
import Thumbnail3 from "../../public/blog-thumbnails/blog-post-3.webp";
import { BsCalendarFill, BsFolderFill, BsPersonFill } from "react-icons/bs";
import Posts from "../components/Posts";

export default function Blog() {
  return (
    <div className="container mx-auto grid col-span-1 px-40 pt-10">
      <section className="py-10">
        <Posts />
        <h3 className="text-4xl py-10">Javascript Scope & Closure</h3>
        <Image src={Thumbnail1} alt="Laptop" className="w-5/6 rounded-lg" />
        <p className="text-lg py-10 pr-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste
          id sapiente totam ab, autem aliquid maxime perspiciatis quo est,
          eligendi recusandae laudantium? Minus sunt ut illo eligendi? Tempore
          sunt fugiat sapiente. Esse asperiores nostrum dolore excepturi.
          Distinctio nesciunt assumenda a quos obcaecati vel placeat?
        </p>
        <div className="flex gap-x-12">
          <div className="flex items-center text-lg">
            <BsPersonFill />
            <p className="px-2">Ryan Spencer</p>
          </div>
          <div className="flex items-center text-lg">
            <BsCalendarFill />
            <p className="px-2">March 23, 2023</p>
          </div>
          <div className="flex items-center text-lg">
            <BsFolderFill />
            <p className="px-2">Uncategorized</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h3 className="text-4xl py-10">REST & RESTful APIs</h3>
        <Image src={Thumbnail2} alt="Laptop" className="w-5/6 rounded-lg" />
        <p className="text-lg py-10 pr-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste
          id sapiente totam ab, autem aliquid maxime perspiciatis quo est,
          eligendi recusandae laudantium? Minus sunt ut illo eligendi? Tempore
          sunt fugiat sapiente. Esse asperiores nostrum dolore excepturi.
          Distinctio nesciunt assumenda a quos obcaecati vel placeat?
        </p>
        <div className="flex gap-x-12">
          <div className="flex items-center text-lg">
            <BsPersonFill />
            <p className="px-2">Ryan Spencer</p>
          </div>
          <div className="flex items-center text-lg">
            <BsCalendarFill />
            <p className="px-2">March 23, 2023</p>
          </div>
          <div className="flex items-center text-lg">
            <BsFolderFill />
            <p className="px-2">Uncategorized</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <h3 className="text-4xl py-10">Higher Order Functions</h3>
        <Image src={Thumbnail3} alt="Laptop" className="w-5/6 rounded-lg" />
        <p className="text-lg py-10 pr-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste
          id sapiente totam ab, autem aliquid maxime perspiciatis quo est,
          eligendi recusandae laudantium? Minus sunt ut illo eligendi? Tempore
          sunt fugiat sapiente. Esse asperiores nostrum dolore excepturi.
          Distinctio nesciunt assumenda a quos obcaecati vel placeat?
        </p>
        <div className="flex gap-x-12">
          <div className="flex items-center text-lg">
            <BsPersonFill />
            <p className="px-2">Ryan Spencer</p>
          </div>
          <div className="flex items-center text-lg">
            <BsCalendarFill />
            <p className="px-2">March 23, 2023</p>
          </div>
          <div className="flex items-center text-lg">
            <BsFolderFill />
            <p className="px-2">Uncategorized</p>
          </div>
        </div>
      </section>
    </div>
  );
}
