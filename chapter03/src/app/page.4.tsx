export default () => {
  return (
    <div className="my-2 text-center">
      <Title>Work04</Title>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = function ({ children }: Props) {
  return <h1 className="text-4xl">{children}</h1>;
};

// export const Title: React.FC<Props> = ({ children }: Props) => (
//   <h1 className="text-4xl">{children}</h1>
// );
