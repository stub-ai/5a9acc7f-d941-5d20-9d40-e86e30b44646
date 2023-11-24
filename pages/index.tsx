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
          href="/path/to/your/file.usdz"
          rel="ar"
          className="block w-full py-2 px-3 rounded bg-indigo-600 text-white text-center font-bold text-xl"
        >
          Open in AR
        </a>
      </div>
    </div>
  );
}