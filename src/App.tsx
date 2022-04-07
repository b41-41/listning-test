import React, { useEffect, useState } from 'react';
import { authService } from './fbase';

import Loading from 'components/Loading/Loading';
import Router from 'components/Router/Router';
import loginStore from 'store/loginStore';
import GlobalStyles from 'styles/globalStyles';

function App() {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user && loginStore((state) => state.updateLogin);
      setInit(true);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="App">{init ? <Router /> : <Loading />}</div>
    </>
  );
}

export default App;
