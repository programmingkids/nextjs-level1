export default () => {
  return (
    <div className="my-2 text-center">
      <User name={'Bob'} age={17}>
        Work05
      </User>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  name: string;
  age: number;
};

const User: React.FC<Props> = function ({ children, name, age }: Props) {
  return (
    <>
      <h1 className="text-4xl">{children}</h1>
      <div className="text-lg">Name: {name}</div>
      <div className="text-lg">Age: {age}</div>
    </>
  );
};

// const User: React.FC<Props> = ({ children, name, age }: Props) => (
//   <>
//       <h1 className="text-4xl">{children}</h1>
//       <div className="text-lg">Name: {name}</div>
//       <div className="text-lg">Age: {age}</div>
//   </>
// );
