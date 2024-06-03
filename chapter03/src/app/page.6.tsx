export default () => {
  return (
    <div className="main">
      <Title />
    </div>
  );
};

export const Title: () => JSX.Element = function (): JSX.Element {
  return <h1>Work06</h1>;
};

//export const Title: () => JSX.Element = (): JSX.Element => <h1>Work06</h1>;
