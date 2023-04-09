import React from "react";
import Image from "next/image";
import SolidButton from "./SolidButton";

export default function ProjectPreview(props: {
  image: string;
  alt: string;
  title: string;
  summary: string;
}) {
  return (
    <div>
      <Image
        src={props.image}
        alt={props.alt}
        className="rounded-3xl shadow-md shadow-gray-400"
        width={500}
        height={500}
      />
      <div className="py-10">
        <h5 className="text-2xl font-bold">{props.title}</h5>
        <p className="text-slate-600 py-6">{props.summary}</p>
        <SolidButton buttonText="Learn More" link={`/${props.title}`} />
      </div>
    </div>
  );
}
