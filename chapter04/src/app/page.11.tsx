'use client';

import { useRef, useEffect } from 'react';

export default function Home() {
  // textRef: RefObject<HTMLInputElement>
  const textRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.value = 'Hello';
      textRef.current.focus();
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="title1">Work11</h1>
      <input type="text" className="form-control" ref={textRef} />
    </div>
  );
}
