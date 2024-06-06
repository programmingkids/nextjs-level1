'use client';

import { useState } from 'react';

type User = {
  name: string;
  age?: number;
};

const initUser: User = {
  name: '',
};

export default function Home() {
  // generics
  const [user, setUser] = useState<User>(initUser);
  // no generics
  // const [user, setUser] = useState(initUser);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>): void {
    setUser((u) => ({ ...u, [e.target.name]: e.target.value }));
  };
  
  return (
    <div className="text-center">
      <h1 className="title1">Work08</h1>
      <div className="m-3 text-lg">Name:{user.name}</div>
      <div className="m-3 text-lg">Age:{user.age}</div>
      <hr />
      <div className="my-3">
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className="my-3">
        <input
          type="number"
          name="age"
          className="form-control"
          onChange={handleChange}
          placeholder="Age"
        />
      </div>
    </div>
  );
}
