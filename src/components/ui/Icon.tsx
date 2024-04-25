import sprite from "/images/sprite.svg";

interface IconProps {
  w: number;
  h?: number;
  className: string;
  iconName: string;
}

const Icon = ({ w, h = w, className, iconName }: IconProps) => {
  return (
    <svg className={className} width={w} height={h}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
