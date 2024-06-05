export default () => {
  return (
    <div className="my-2 text-center">
      <User name={'Elsa'} age={17} />
    </div>
  );
};

type Props = {
  name: string;
  age: number;
};

const User: ({ name, age }: Props) => JSX.Element = function ({
  name,
  age,
}: Props) {
  return (
    <>
      <h1 className="text-4xl">Work07</h1>
      <div className="text-lg">Name: {name}</div>
      <div className="text-lg">Age: {age}</div>
    </>
  );
};

// const User: ({ name, age }: Props) => JSX.Element = ({ name, age }: Props) => (
//   <>
//     <h1 className="text-4xl">Work07</h1>
//     <div className="text-lg">Name: {name}</div>
//     <div className="text-lg">Age: {age}</div>
//   </>
// );
