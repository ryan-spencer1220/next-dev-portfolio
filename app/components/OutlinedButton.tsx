import Link from "next/link";

export default function OutlinedButton(props: {
  buttonText: string;
  link: string;
}) {
  return (
    <button className="py-2 px-8 border-2 border-slate-700 border-solid rounded text-slate-700">
      <Link href={props.link}>{props.buttonText}</Link>
    </button>
  );
}
