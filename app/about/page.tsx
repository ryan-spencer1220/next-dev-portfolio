"use client";
import Image from "next/image";
import Headshot from "../../public/headshot.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  return (
    <>
      <section className="flex pt-40 pb-28">
        <div className="pr-40">
          <h1 className="text-5xl py-4">Hi there, I&apos;m Ryan.</h1>
          <div className="text-slate-600">
            <p className="py-4 text-lg leading-relaxed">
              Prior to software I was an active member of the craft beer
              industry. While my career goals have shifted, that experience
              helped me understand how much I value community and continual
              education. Ultimately these realizations led me to a career in
              software development. Working in craft beer, and specifically
              managing a bar, proved to be a great opportunity to develop my
              communication skills, ability to stay organized, and further hone
              my problem-solving abilities.
            </p>
            <p className="py-4 text-lg leading-relaxed">
              My formal software development training took place at a coding
              bootcamp called Epicodus, in Portland, Oregon. Our time was spent
              pair programming for eight-hour days over a six month period.
              During The first third of our program, we built a solid
              understanding of Javascript, HTML and CSS. Next, we utilized
              strongly-typed languages by spending six weeks with C# & ASP.NET
              Core. Finally, we built upon the fundamentals we learned in
              JavaScript by taking a deep dive into React and Firebase.
            </p>
            <p className="py-4 text-lg leading-relaxed">
              Currently I am working as a Project Manager at a small digital
              marketing company called Delmain. If you have a job opportunity or
              idea you would like to discuss, feel free to reach out!
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
            Thoughts on what I&apos;m building and learning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-40"></div>
      </section>
    </>
  );
}
