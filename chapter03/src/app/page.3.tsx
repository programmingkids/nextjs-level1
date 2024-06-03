export default () => {
  return (
    <div className="main">
      <Title>Work03</Title>
    </div>
  );
};

const Title: React.FC<{ children: React.ReactNode }> = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1>{children}</h1>;
};

// const Title: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => <h1>{children}</h1>;
