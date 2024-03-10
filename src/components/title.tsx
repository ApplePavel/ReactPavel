interface ITitleProps {
  text: string;
  level?: number;
}

const Title = ({ text, level = 1 }: ITitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{text}</Tag>;
};

export default Title;
