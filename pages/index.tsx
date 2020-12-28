import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <div>Hello World</div>;
}
