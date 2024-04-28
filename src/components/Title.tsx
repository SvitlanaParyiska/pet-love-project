interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h1 className="font-bold text-28 tablet:text-54 leading-none tracking-[-0.03em]">
      {text}
    </h1>
  );
}

export default Title;
