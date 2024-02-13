import React from 'react';
// import PageLayout from './components/page-layout/page-layout';
import { Route, Routes } from 'react-router-dom';
import Leagues from './components/leagues/leagues';
import Teams from './components/teams/teams';
import Header from './components/header/header';
import Main from './components/main/main';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Header />
      </div>
      <Routes>
        <Route  path={`/leagues`}
                element={<Leagues />} />
        <Route  path={'/teams'}
                element={<Teams />} />
        <Route  path={'/*'}
                element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
