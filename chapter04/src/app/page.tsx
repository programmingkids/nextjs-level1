'use client';

import { useEffect, useState } from 'react';

type Player = {
  name: string;
  hp: number;
  mp: number;
  job: string;
};

const url = 'https://cog-study.herokuapp.com/nextjs_level1/chapter04/work13/';

export default function Home() {
  const [list, setList] = useState([] as Player[]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
    })();
  }, []);

  return (
    <div className="text-center">
      <h1 className="title1">Work13</h1>
      <TableBox values={list} />
    </div>
  );
}

const TableBox = function ({ values }: { values: Player[] }) {
  return (
    <table className="dataTable">
      <TheadBox />
      <TbodyBox values={values} />
    </table>
  );
};

const TheadBox = function () {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Hp</th>
        <th>Mp</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TbodyBox = function ({ values }: { values: Player[] }) {
  return (
    <tbody>
      {values.map((v, i) => (
        <TrBox key={i} value={v} />
      ))}
    </tbody>
  );
};
const TrBox = function ({ value }: { value: Player }) {
  return (
    <tr>
      <td>{value.name}</td>
      <td>{value.hp}</td>
      <td>{value.mp}</td>
      <td>{value.job}</td>
    </tr>
  );
};
