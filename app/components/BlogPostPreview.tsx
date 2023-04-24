import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export default function BlogPostPreview(props: {
  image: string;
  alt: string;
  title: string;
  summary: string;
  link: string;
}) {
  return (
    <div>
      <Link href={props.link}>
        <Image
          src={props.image}
          alt={props.alt}
          className="rounded-3xl shadow-md shadow-gray-400 hover:-translate-y-2 duration-300 ease-in-out"
          width={500}
          height={500}
        />
      </Link>
      <div className="py-10">
        <h5 className="text-2xl font-bold">{props.title}</h5>
        <p className="text-slate-600 py-6">{props.summary}</p>
        <RoughNotation type="box" show={true} color="black">
          <Link href={props.link} className="text-slate-600 font-bold">
            Read More
          </Link>
        </RoughNotation>
      </div>
    </div>
  );
}
