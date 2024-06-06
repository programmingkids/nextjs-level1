const fruits: string[] = ['apple', 'orange', 'grape', 'melon', 'peach'];

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="title1">Work02</h1>
      <FruitsBox value={fruits} />
    </div>
  );
}

// 配列のProps
const FruitsBox = function ({ value: fruits }: { value: string[] }) {
  return (
    <div className="text-lg">
      {fruits.map((v) => (
        <li>{v}</li>
      ))}
    </div>
  );
};
