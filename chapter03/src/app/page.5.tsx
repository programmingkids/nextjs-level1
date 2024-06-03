export default () => {
  return (
    <div className="main">
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
    <div>
      <h1>{children}</h1>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};
// const User: React.FC<Props> = ({ children, name, age }: Props) => (
//   <div>
//     <h1>{children}</h1>
//     <div>Name: {name}</div>
//     <div>Age: {age}</div>
//   </div>
// );
