'use client';

export default function Home() {
  // function
  const handleClick = function (event: React.MouseEvent<HTMLDivElement>): void {
    alert(event.target.innerHTML);
  };

  // arrow
  // const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
  //   alert(event.target.innerHTML);
  // };

  return (
    <div className="text-center">
      <h1 className="title1">Work06</h1>
      <div className="clickableDiv" onClick={handleClick}>
        Hello, this is work03
      </div>
    </div>
  );
}
