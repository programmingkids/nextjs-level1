type Player = {
  name: string;
  hp: number;
  mp: number;
  job: string;
};

const bob: Player = {
  name: 'Bob',
  hp: 80,
  mp: 50,
  job: 'Fighter',
};

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="title1">Work01</h1>
      <PlayerBox value={bob} />
    </div>
  );
}

// Propsの型注釈
const PlayerBox = function ({ value }: { value: Player }) {
  return (
    <div className="text-lg">
      <div>Name: {value.name}</div>
      <div>Hp: {value.hp}</div>
      <div>Mp: {value.mp}</div>
      <div>Job: {value.job}</div>
    </div>
  );
};
