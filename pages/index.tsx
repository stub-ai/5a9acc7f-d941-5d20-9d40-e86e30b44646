import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authenticated') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Header />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <a
          href="https://drive.google.com/uc?export=download&id=1fGY0RECL79mAU3oSZMTQ46wgVdY21G_a"
          rel="ar"
          className="block w-full py-2 px-3 rounded bg-indigo-600 text-white text-center font-bold text-xl"
        >
          Open in AR
        </a>
      </div>
    </div>
  );
}