interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h1 className="font-manrope-bold text-28 tablet:text-54 tracking-[-0.03em]">
      {text}
    </h1>
  );
}

export default Title;
