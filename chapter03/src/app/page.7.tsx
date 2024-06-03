export default () => {
  return (
    <div className="main">
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
    <div>
      <h1>Work07</h1>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};

// const User: ({ name, age }: Props) => JSX.Element = ({ name, age }: Props) => (
//   <div>
//     <h1>Work07</h1>
//     <div>Name: {name}</div>
//     <div>Age: {age}</div>
//   </div>
// );
