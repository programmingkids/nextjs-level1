'use client';

import { useContext, createContext } from 'react';

type Player = {
  name: string;
  job: string;
};

const elsa: Player = {
  name: 'Elsa',
  job: 'Magician',
};

const PlayerContext = createContext<Player | null>(null);

export default function Home() {
  return (
    <PlayerContext.Provider value={elsa}>
      <div className="text-center">
        <h1 className="title1">Work12</h1>
        <PlayerBox />
      </div>
    </PlayerContext.Provider>
  );
}

const PlayerBox = function () {
  const player = useContext(PlayerContext);

  return (
    <div className="text-lg">
      <div>Name: {player?.name}</div>
      <div>Job: {player?.job}</div>
    </div>
  );
};
