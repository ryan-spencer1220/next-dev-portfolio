export default function SolidButton(props: { buttonText: string }) {
  return (
    <button className="py-2 px-8 bg-black rounded text-white">
      {props.buttonText}
    </button>
  );
}
