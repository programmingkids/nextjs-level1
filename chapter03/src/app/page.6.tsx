export default () => {
  return (
    <div className="my-2 text-center">
      <Title />
    </div>
  );
};

export const Title: () => JSX.Element = function (): JSX.Element {
  return <h1 className="text-4xl">Work06</h1>;
};

// export const Title: () => JSX.Element = (): JSX.Element => <h1 className="text-4xl">Work06</h1>;
