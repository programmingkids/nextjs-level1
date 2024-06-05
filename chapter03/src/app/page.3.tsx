export default () => {
  return (
    <div className="my-2 text-center">
      <Title>Work03</Title>
    </div>
  );
};

const Title: React.FC<{ children: React.ReactNode }> = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-4xl">{children}</h1>;
};

// const Title: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => <h1 className="text-4xl">{children}</h1>;
