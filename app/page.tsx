"use client";
import Image from "next/image";
import Headshot from "../public/headshot.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import OutlinedButton from "./components/OutlinedButton";
import SolidButton from "./components/SolidButton";
import BlogPostPreview from "./components/BlogPostPreview";
import ProjectPreview from "./components/ProjectPreview";

export default function Home() {
  return (
    <>
      <section className="flex md:pt-28 pb-20 lg:flex-row flex-col-reverse">
        <div className="md:pr-40 md:pt-0 pt-10">
          <RoughNotationGroup show={true}>
            <h1 className="md:text-5xl text-4xl py-4">
              Hello! I&apos;m{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="#d1f6f4"
                order={1}
              >
                Ryan,
              </RoughNotation>{" "}
              a developer based in Portland, OR.
            </h1>
            <div className="text-slate-600">
              <p className="py-4 text-lg leading-relaxed">
                I am a recent Epicodus graduate specializing in{" "}
                <RoughNotation type="highlight" order={2} color="#f9caca">
                  JavaScript/React
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation type="highlight" order={3} color="#c5f2cd">
                  C#.
                </RoughNotation>{" "}
                I'm currently searching for an opportunity to combine my
                background in{" "}
                <RoughNotation type="highlight" order={4} color="#fff2c8">
                  business
                </RoughNotation>{" "}
                management with my experience in{" "}
                <RoughNotation type="highlight" color="#eadbf6" order={4}>
                  software
                </RoughNotation>{" "}
                development.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                Prior to Epicodus I was an active member of the the craft beer
                industry as the general manager of a high-volume craft beer bar.
                I am a{" "}
                <RoughNotation type="highlight" color="#c5f2cd" order={5}>
                  communicative,
                </RoughNotation>{" "}
                <RoughNotation type="highlight" color="#d1f6f4" order={6}>
                  organized,
                </RoughNotation>{" "}
                team-player who presents technical information effectively with
                a{" "}
                <RoughNotation type="highlight" color="#fff2c8" order={7}>
                  passion
                </RoughNotation>{" "}
                for education and personal{" "}
                <RoughNotation type="highlight" color="#eadbf6" order={7}>
                  growth.
                </RoughNotation>
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
          className="md:w-1/3 md:h-1/3 rounded-3xl shadow-2xl shadow-gray-400"
        />
      </section>
      <section className="md:pb-28 pb-20">
        <div>
          <h2 className="text-4xl">Projects</h2>
          <p className="text-xl text-slate-700 pt-4 md:pb-20 pb-10">
            Some of the side projects I&apos;ve been working on:
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10">
          <ProjectPreview
            image="/tipout.png"
            alt="tip out project thumbnail"
            title="Tip Out Mobile Application"
            summary="Mobile application designed to help service industry workers track their income from wages & tips. This application was built with React Native & Supabase. Landing page built with Vanilla JS, CSS, & HTML."
            liveSite=""
            sourceCode="https://github.com/ryan-spencer1220/tip-out"
          />
          <ProjectPreview
            image="/booksmart.png"
            alt="book smart project thumbnail"
            title="Booksmart Web Application"
            summary="Web application designed to give users the opportunity to speak with their favorite authors through the ChatGPT API. This project was created with Next.js, React, and Tailwind CSS."
            liveSite=""
            sourceCode="https://github.com/ryan-spencer1220/booksmart"
          />
        </div>
      </section>
      <section className="md:pb-28 pb-20">
        <div>
          <h2 className="text-4xl">Posts</h2>
          <p className="text-xl text-slate-700 pt-4 md:pb-20 pb-10">
            Thoughts on what I&apos;m building and learning.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <BlogPostPreview
            image="/components-1.webp"
            alt="Laptop"
            title="Class & Functional Components"
            summary="Since the launch of React in 2013, the framework has evolved and changed overtime. Many of the concepts introduced.."
            link="/posts/class-and-functional-components"
          />
          <BlogPostPreview
            image="/scope.jpg"
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
      <section className="md:pb-28">
        <h2 className="text-4xl">
          <RoughNotation type="box" show={true} color="black">
            Get In Touch
          </RoughNotation>
        </h2>
        <p className="text-xl text-slate-700 pt-4 pb-20">
          Do you have a job opportunity or idea you would like to discuss? Feel
          free to reach me at{" "}
          <a
            className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-slate-500"
            href="mailto: ryan.spencer1220@gmail.com"
          >
            ryan.spencer1220@gmail.com
          </a>
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
