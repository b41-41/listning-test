import React, { useEffect, useState } from 'react';
import { authService } from './fbase';

import Loading from 'components/Loading/Loading';
import Router from 'components/Router/Router';
import { loginStore } from './zustand/loginStore';

function App() {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user && loginStore((state) => state.updateLoginState);
      setInit(true);
    });
  }, []);

  return <div className="App">{init ? <Router /> : <Loading />}</div>;
}

export default App;
