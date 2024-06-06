'use client';

export default function Home() {
  // function
  const handleChange = function (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    alert(event.target.value);
  };

  // arrow
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   alert(event.target.value);
  // };

  return (
    <div className="text-center">
      <h1 className="title1">Work05</h1>
      <input 
        type="text" 
        className="form-control" 
        onChange={handleChange} />
    </div>
  );
}
