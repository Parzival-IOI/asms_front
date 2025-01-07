
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?:string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      id={props.id}
      className={`container p-8 mx-auto xl:px-4 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

