import { createBrowserHistory } from 'history';
import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import Root from './routes/Root';

const App: FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Root />
    </Router>
  );
}

export default App;
