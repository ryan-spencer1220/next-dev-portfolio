import Link from "next/link";

export default function SolidButton(props: {
  buttonText: string;
  link: string;
}) {
  return (
    <button className="py-2 px-8 bg-black rounded text-white shadow-2xl hover:-translate-y-2 duration-300 ease-in-out">
      <a href={props.link}>{props.buttonText}</a>
    </button>
  );
}
