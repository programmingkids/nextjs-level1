export default () => {
  return (
    <div className="main">
      <Title>Work04</Title>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = function ({ children }: Props) {
  return <h1>{children}</h1>;
};

// export const Title: React.FC<Props> = ({ children }: Props) => (
//   <h1>{children}</h1>
// );
