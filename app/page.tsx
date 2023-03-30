"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Headshot from "../public/headshot.jpg";
import Project from "../public/example.png";
import OutlinedButton from "./components/OutlinedButton";
import SolidButton from "./components/SolidButton";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="flex pt-40 pb-28">
        <div className="pr-40">
          <h1 className="text-5xl">
            Hello! I'm{" "}
            <RoughNotation type="highlight" show={true} color="#0236E8">
              Ryan Spencer
            </RoughNotation>
            , a developer based in Portland, Oregon.
          </h1>
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
            <div className="grid grid-cols-2 gap-4 py-10">
              <SolidButton
                buttonText="View LinkedIn"
                link="https://www.linkedin.com/in/ryan-spencer-pdx/"
              />
              <OutlinedButton
                buttonText="View Github"
                link="https://github.com/ryan-spencer1220"
              />
            </div>
          </div>
        </div>
        <Image
          src={Headshot}
          alt="Ryan Photo"
          className="w-1/3 h-1/3 rounded-3xl shadow-lg shadow-gray-400"
        />
      </section>
      <section className="pb-28">
        <div>
          <h2 className="text-4xl">Projects</h2>
          <p className="text-xl text-slate-700 pt-4 pb-20">
            Some of the side projects I've been working on:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Project Name #1</h5>
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
              className="rounded-3xl shadow-md shadow-gray-400"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Project Name #2</h5>
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
      <section className="pb-28">
        <div>
          <h2 className="text-4xl">Posts</h2>
          <p className="text-xl text-slate-700 pt-4 pb-20">
            Thoughts on what I'm building and learning.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Project Name #1</h5>
              <p className="text-slate-600 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                illo laboriosam cum iste dicta quia culpa sed exercitationem
                quas...
              </p>
              <p className="text-slate-600 font-bold">Read More</p>
            </div>
          </div>
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Blog Post #2</h5>
              <p className="text-slate-600 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                illo laboriosam cum iste dicta quia culpa sed exercitationem
                quas..
              </p>
              <p className="text-slate-600 font-bold">Read More</p>
            </div>
          </div>
          <div>
            <Image
              src={Project}
              alt="Sample Project Mockup"
              className="rounded-3xl shadow-md shadow-gray-400"
            />
            <div className="py-10">
              <h5 className="text-2xl font-bold">Blog Post #3</h5>
              <p className="text-slate-600 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                illo laboriosam cum iste dicta quia culpa sed exercitationem
                quas..
              </p>
              <p className="text-slate-600 font-bold">Read More</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <h2 className="text-4xl">Get In Touch</h2>
        <p className="text-xl text-slate-700 pt-4 pb-20">
          Do you have a job opportunity or idea you would like to discuss? Feel
          free to reach me at hello@ryanspencer.dev. You can also find me on{" "}
          <Link
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="https://github.com/ryan-spencer1220"
          >
            Github
          </Link>{" "}
          and{" "}
          <Link
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            href="https://www.linkedin.com/in/ryan-spencer-pdx/"
          >
            LinkedIn
          </Link>
          .
        </p>
      </section>
    </>
  );
}
