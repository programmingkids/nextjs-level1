'use client';

export default function Home() {
  // function
  const handleClick = function (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    alert('work01');
  };

  // arrow
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  //   alert('work01');
  // };

  return (
    <div className="text-center">
      <h1 className="title1">Work04</h1>
      <button className="btn btn-blue" onClick={handleClick}>Click</button>
    </div>
  );
}
