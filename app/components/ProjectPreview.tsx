import React from "react";
import Image from "next/image";
import SolidButton from "./SolidButton";
import OutlinedButton from "./OutlinedButton";

export default function ProjectPreview(props: {
  image: string;
  alt: string;
  title: string;
  summary: string;
  liveSite: string;
  sourceCode: string;
}) {
  return (
    <div>
      <Image
        src={props.image}
        alt={props.alt}
        className="rounded-3xl shadow-md shadow-gray-400"
        width={400}
        height={400}
      />
      <div className="py-10">
        <h5 className="text-2xl font-bold">{props.title}</h5>
        <p className="text-slate-600 py-6">{props.summary}</p>
        <div className="flex space-x-2 md:space-x-8">
          <OutlinedButton buttonText="View Live Site" link={props.liveSite} />
          <SolidButton buttonText="View Source Code" link={props.sourceCode} />
        </div>
      </div>
    </div>
  );
}
