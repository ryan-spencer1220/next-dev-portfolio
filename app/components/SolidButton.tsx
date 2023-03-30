import Link from "next/link";

export default function SolidButton(props: {
  buttonText: string;
  link: string;
}) {
  return (
    <button className="py-2 px-8 bg-black rounded text-white">
      <Link href={props.link}>{props.buttonText}</Link>
    </button>
  );
}
