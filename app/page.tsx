"use client";
import Image from "next/image";
import Headshot from "../public/headshot.jpg";
import Project from "../public/example.png";
import OutlinedButton from "./components/OutlinedButton";
import SolidButton from "./components/SolidButton";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import BlogPostPreview from "./components/BlogPostPreview";

export default function Home() {
  return (
    <>
      <section className="flex pt-40 pb-28">
        <div className="pr-40">
          <RoughNotationGroup show={true}>
            <h1 className="text-5xl py-4">
              Hello! I&apos;m{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="#d1f6f4"
                order={1}
              >
                Ryan Spencer
              </RoughNotation>
              , a developer based in Portland, Oregon.
            </h1>
            <div className="text-slate-600">
              <p className="py-4 text-lg leading-relaxed">
                Recent Epicodus graduate specializing in{" "}
                <RoughNotation type="highlight" order={2} color="pink">
                  JavaScript/ React and C#.
                </RoughNotation>{" "}
                Searching for an opportunity to combine my background in{" "}
                <RoughNotation type="highlight" order={3} color="#fff2c8">
                  business management
                </RoughNotation>{" "}
                with my experience in{" "}
                <RoughNotation type="highlight" color="#eadbf6" order={4}>
                  software development.
                </RoughNotation>
              </p>
              <p className="py-4 text-lg leading-relaxed">
                Prior to Epicodus I was an active member of the the craft beer
                industry as the general manager of a high-volume craft beer bar
                in Portland, Oregon. I am a{" "}
                <RoughNotation type="highlight" color="#c5f2cd" order={5}>
                  communicative,
                </RoughNotation>{" "}
                <RoughNotation type="highlight" color="#d1f6f4" order={6}>
                  detail oriented,
                </RoughNotation>{" "}
                <RoughNotation type="highlight" color="#fff2c8" order={6}>
                  team player
                </RoughNotation>{" "}
                who presents technical information effectively with a passion
                for education and personal growth.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <RoughNotation type="underline" order={7}>
                  Take a look at my work or get in touch!
                </RoughNotation>
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
          </RoughNotationGroup>
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
            Some of the side projects I&apos;ve been working on:
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
            Thoughts on what I&apos;m building and learning.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <BlogPostPreview
            image="/components-1.webp"
            alt="Laptop"
            title="Class & Functional Components"
            summary="Since the launch of React in 2013, the framework has evolved and changed overtime. Many of the concepts introduced.."
            link="/posts/class-and-functional-components"
          />
          <BlogPostPreview
            image="/scope-img1.webp"
            alt="Sample Project Mockup"
            title="JavaScript Scope & Closure"
            summary="Scope in Javascript typically refers to function scope, functions determine the what items can and cannot access other functions..."
            link="/posts/scope-closure"
          />
          <BlogPostPreview
            image="/api-img1.webp"
            alt="Whiteboard"
            title="REST & RESTful APIs"
            summary="Familiarity with REST & RESTful APIs is an increasingly common request from employers looking to hire developers..."
            link="/posts/restful-apis"
          />
        </div>
      </section>
      <section className="pb-20">
        <h2 className="text-4xl">
          <RoughNotation type="box" show={true} color="black">
            Get In Touch
          </RoughNotation>
        </h2>
        <p className="text-xl text-slate-700 pt-4 pb-20">
          Do you have a job opportunity or idea you would like to discuss? Feel
          free to reach me at{" "}
          <Link
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-slate-500"
            href="https://github.com/ryan-spencer1220"
          >
            hello@ryanspencer.dev
          </Link>
          . You can also find me on{" "}
          <Link
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-slate-500"
            href="https://github.com/ryan-spencer1220"
          >
            Github
          </Link>{" "}
          and{" "}
          <Link
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-slate-500"
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
