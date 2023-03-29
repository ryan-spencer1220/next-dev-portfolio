"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Headshot from "../public/headshot.jpg";
import OutlinedButton from "./components/OutlinedButton";
import SolidButton from "./components/SolidButton";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="flex pt-40 pb-20">
        <div className="pr-40">
          <h1 className="text-5xl">
            Hello! I'm{" "}
            <RoughNotation type="highlight" show={true} color="yellow">
              Ryan Spencer
            </RoughNotation>
            , a developer based in Portland, Oregon.
          </h1>

          <div>
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
              <SolidButton buttonText="View LinkedIn" />
              <OutlinedButton buttonText="View Github" />
            </div>
          </div>
        </div>
        <Image
          src={Headshot}
          alt="Ryan Photo"
          className="w-1/3 h-1/3 rounded-3xl shadow-lg shadow-gray-400"
        />
      </section>
      <section className="flex">
        <div>
          <h2 className="text-4xl">Projects</h2>
          <p className="text-xl text-slate-700 py-4">
            Some of the side projects I've been working on:
          </p>
        </div>
      </section>
    </>
  );
}
