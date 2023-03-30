"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Headshot from "../../public/headshot.jpg";
import Project from "../../public/example.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <section className="flex pt-40 pb-28">
        <div className="pr-40">
          <h1 className="text-5xl py-4">Hi there, I'm Ryan.</h1>
          <div className="text-slate-600">
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, pariatur, corrupti molestias suscipit provident rerum
              ad magnam excepturi natus incidunt quos aspernatur consequatur.
              Vero tempora in temporibus. Repellendus, cupiditate facere.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, pariatur, corrupti molestias suscipit provident rerum
              ad magnam excepturi natus incidunt quos aspernatur consequatur.
              Vero tempora in temporibus. Repellendus, cupiditate facere.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              voluptate dicta aliquid, quos voluptates optio!
            </p>
          </div>
        </div>
        <Image
          src={Headshot}
          alt="Ryan Photo"
          className="w-1/3 h-1/3 rounded-full shadow-lg shadow-gray-400"
        />
      </section>
      <section className="pb-28">
        <div>
          <h2 className="text-4xl">Recent Posts</h2>
          <p className="text-xl text-slate-700 pt-4 pb-20">
            Thoughts on what I'm building and learning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-40">
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400 w-5/6"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Blog Post #1</h5>
              <p className="text-slate-600 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                illo laboriosam cum iste dicta quia culpa sed exercitationem
                quas!
              </p>
              <p className="text-slate-600 font-bold">View Project</p>
            </div>
          </div>
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400 w-5/6"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Blog Post #2</h5>
              <p className="text-slate-600 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                illo laboriosam cum iste dicta quia culpa sed exercitationem
                quas!
              </p>
              <p className="text-slate-600 font-bold">View Project</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
