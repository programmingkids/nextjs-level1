export default () => {
  return (
    <div className="my-2 text-center">
      <Sample01 />
    </div>
  );
};

// function / React.FC / no generics / no props
const Sample01: React.FC = function () {
  return <h1>Sample01</h1>;
};

// arrow / React.FC / no generics / no props
const Sample02: React.FC = function () {
  return <h1>Sample02</h1>;
};

// function / React.FC / generics / children
const Sample03: React.FC<{ children: React.ReactNode }> = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
};

// arrow / React.FC / generics / children
const Sample04: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => <div>{children}</div>;

// function / React.FC / generics / children / props
const Sample05: React.FC<{ children: React.ReactNode; name: string }> =
  function ({ children, name }: { children: React.ReactNode; name: string }) {
    return (
      <>
        <h1>{children}</h1>
        <div>Name:{name}</div>
      </>
    );
  };

// arrow / React.FC / generics / children / props
const Sample06: React.FC<{ children: React.ReactNode; name: string }> = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <>
    <h1>{children}</h1>
    <div>Name:{name}</div>
  </>
);

// function / React.FC / generics / type aliase / children / props
type Sample07Props = {
  children: React.ReactNode;
  name: string;
};

const Sample07: React.FC<Sample07Props> = function ({
  children,
  name,
}: Sample07Props) {
  return (
    <>
      <h1>{children}</h1>
      <div>Name:{name}</div>
    </>
  );
};

// arrow / React.FC / generics / type aliase / children / props
type Sample08Props = {
  children: React.ReactNode;
  name: string;
};

const Sample08: React.FC<Sample08Props> = ({
  children,
  name,
}: Sample08Props) => (
  <>
    <h1>{children}</h1>
    <div>Name:{name}</div>
  </>
);

// function / JSX.Element / no props
const Sample09: () => JSX.Element = function (): JSX.Element {
  return <h1>Sample09</h1>;
};

// arrow / JSX.Element / no props
const Sample10: () => JSX.Element = (): JSX.Element => <h1>Sample10</h1>;

// function / JSX.Element / props
const Sample11: ({ name }: { name: string }) => JSX.Element = function ({
  name,
}: {
  name: string;
}): JSX.Element {
  return (
    <>
      <h1>Sample11</h1>
      <div>Name: {name}</div>
    </>
  );
};

// arrow / JSX.Element / props
const Sample12: ({ name }: { name: string }) => JSX.Element = ({
  name,
}: {
  name: string;
}): JSX.Element => (
  <>
    <h1>Sample12</h1>
    <div>Name: {name}</div>
  </>
);

// function / type aliase / JSX.Element / props
type Sample13Props = {
  name: string;
};

const Sample13: ({ name }: Sample13Props) => JSX.Element = function ({
  name,
}: Sample13Props): JSX.Element {
  return (
    <>
      <h1>Sample13</h1>
      <div>Name: {name}</div>
    </>
  );
};

// arrow / type aliase / JSX.Element / props
type Sample14Props = {
  name: string;
};

const Sample14: ({ name }: Sample14Props) => JSX.Element = ({
  name,
}: Sample14Props): JSX.Element => (
  <>
    <h1>Sample14</h1>
    <div>Name: {name}</div>
  </>
);

// function / type aliase / props / no type
type Sample15Props = {
  name: string;
};

const Sample15 = function ({ name }: Sample15Props) {
  return (
    <>
      <h1>Sample15</h1>
      <div>Name: {name}</div>
    </>
  );
};

// arrow / type aliase / props / no types
type Sample16Props = {
  name: string;
};

const Sample16 = ({ name }: Sample16Props) => (
  <>
    <h1>Sample16</h1>
    <div>Name: {name}</div>
  </>
);
