"use client";
import Image from "next/image";
import Headshot from "../../public/headshot.jpg";
import BlogPostPreview from "../components/BlogPostPreview";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  return (
    <>
      <section className="flex lg:pb-40 md:pt-28 md:pb-28 pb-12 lg:flex-row flex-col-reverse">
        <div className="md:pr-40 px-4 md:text-left text-center">
          <RoughNotationGroup show={true}>
            <h1 className="text-5xl py-4 md:pt-0 pt-12">
              Hi there, I&apos;m{" "}
              <RoughNotation type="underline" order={1}>
                Ryan.
              </RoughNotation>
            </h1>

            <div className="text-slate-600">
              <p className="py-4 text-lg leading-relaxed">
                Prior to software I was an active member of the craft beer
                industry . While my career goals have shifted, that experience
                helped me identify the importance I place on{" "}
                <RoughNotation type="highlight" order={2} color="#f9caca">
                  community
                </RoughNotation>{" "}
                and continual{" "}
                <RoughNotation type="highlight" order={3} color="#d1f6f4">
                  education.
                </RoughNotation>{" "}
                Ultimately it was these realizations that led me to a career in
                software development. Working in craft beer, and specifically
                managing a bar, proved to be a great opportunity to develop my{" "}
                <RoughNotation type="highlight" order={4} color="#fff2c8">
                  communication
                </RoughNotation>{" "}
                skills, ability to stay{" "}
                <RoughNotation type="highlight" order={5} color="#eadbf6">
                  organized
                </RoughNotation>{" "}
                , and further hone my{" "}
                <RoughNotation type="highlight" order={6} color="#c5f2cd">
                  problem-
                </RoughNotation>{" "}
                <RoughNotation type="highlight" order={7} color="#c5f2cd">
                  solving
                </RoughNotation>{" "}
                abilities.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                My formal software development training took place at a coding
                bootcamp called Epicodus, in Portland, Oregon. Our time was
                spent pair programming for eight-hour days over a six month
                period. During The first third of our program, we built a solid
                understanding of{" "}
                <RoughNotation type="highlight" order={8} color="#c5f2cd">
                  Javascript
                </RoughNotation>
                ,
                <RoughNotation type="highlight" order={8} color="#fff2c8">
                  HTML
                </RoughNotation>
                , and{" "}
                <RoughNotation type="highlight" order={8} color="#d1f6f4">
                  CSS
                </RoughNotation>
                . Next, we utilized strongly-typed languages by spending six
                weeks with{" "}
                <RoughNotation type="highlight" order={9} color="#eadbf6">
                  C#
                </RoughNotation>{" "}
                & ASP.NET Core. Finally, we built upon the fundamentals we
                learned in JavaScript by taking a deep dive into{" "}
                <RoughNotation type="highlight" order={10} color="#d1f6f4">
                  React
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation type="highlight" order={11} color="#f9caca">
                  Firebase.
                </RoughNotation>
              </p>
              <p className="py-4 text-lg leading-relaxed">
                Currently I am working as a Project Manager at a small digital
                marketing company called Delmain. If you have a job opportunity
                or idea you would like to discuss, feel free to{"  "}
                <RoughNotation type="circle" order={12}>
                  <a href="mailto: hello@ryanspencer.dev">reach out!</a>
                </RoughNotation>
              </p>
            </div>
          </RoughNotationGroup>
        </div>
        <Image
          src={Headshot}
          alt="Ryan Photo"
          className="md:w-1/3 md:h-1/3 w-4/6 h-4/6 rounded-full shadow-2xl shadow-gray-400 place-self-center"
        />
      </section>
      <section className="lg:pb-20">
        <div>
          <h2 className="text-4xl">Posts</h2>
          <p className="text-xl text-slate-700 pt-4 pb-20">
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
    </>
  );
}
