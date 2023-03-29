export default function OutlinedButton(props: { buttonText: string }) {
  return (
    <button className="py-2 px-8 border-2 border-slate-700 border-solid rounded text-slate-700">
      {props.buttonText}
    </button>
  );
}
