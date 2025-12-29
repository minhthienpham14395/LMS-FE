import Header from "../learn/Header";

type ButtonProps = {
  text: string;
};
export function Button({ text }: ButtonProps) {
  return <button className="border-2! border-indigo-600!">{text}</button>;
}
export default function Test() {
  return (
    <>
      <Header name="Phạm" title="Thiện" /> <Button text="Click" />
    </>
  );
}
