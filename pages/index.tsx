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
          href="https://drive.google.com/uc?export=download&id=1UFmel7j23XWfsKb0Ip3cNn89llVeM6MB"
          rel="ar"
          id="iosLinkProduct4"
          style={{display: 'none'}}
        >
          <img 
            src="https://drive.google.com/uc?export=view&id=1W2IPMdWZIbMdNu0sfjVcId6eH2yTFIhU" 
            alt="Visa i AR" 
            style={{width: '100px', height: '29px'}}
          />
        </a>
      </div>
    </div>
  );
}