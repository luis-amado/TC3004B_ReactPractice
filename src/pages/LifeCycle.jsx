import { useEffect, useState } from 'react';

export default function LifeCycle() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('component mounted');
  }, []);

  useEffect(() => {
    console.log('component updated');
  }, [text]);

  useEffect(() => {
    return () => {
      console.log('component unmounted');
    };
  }, []);

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text}
    </div>
  );
}
