type PropsTest = {
  title: string;
  name: string;
};
export default function Header({ name, title }: PropsTest) {
  return (
    <>
      {name} - {title}
    </>
  );
}
