type Player = {
  name: string;
  hp: number;
  mp: number;
  job: string;
};

const players: Player[] = [
  { name: 'Micky', hp: 100, mp: 50, job: 'Hero' },
  { name: 'Donald', hp: 80, mp: 70, job: 'Hero' },
  { name: 'Elsa', hp: 70, mp: 150, job: 'Magician' },
  { name: 'Anna', hp: 100, mp: 80, job: 'Fighter' },
];

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="title1">Work03</h1>
      <PlayersBox value={players} />
    </div>
  );
}

// 型エイリアスのProps
const PlayersBox = function ({ value: players }: { value: Player[] }) {
  return (
    <table className="dataTable">
      <thead>
        <tr>
        <th>Name</th>
        <th>Hp</th>
        <th>Mp</th>
        <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {players.map((v) => (
          <PlayerBox value={v} />
        ))}
      </tbody>
    </table>
  );
};

const PlayerBox = function ({ value: player }: { value: Player }) {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.hp}</td>
      <td>{player.mp}</td>
      <td>{player.job}</td>
    </tr>
  );
};
