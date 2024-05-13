import React, { useEffect, useState } from 'react';

import GrandMastersList from './components/list';

function App() {
  const [list, setList] = useState([]);
  const fetchGMList = async () => {
    const res = await fetch('https://api.chess.com/pub/titled/GM');
    const data = await res.json();
    setList(data.players);
  };
  useEffect(() => {
    fetchGMList();
  }, []);
  return (
    <div className='App'>
      <GrandMastersList list={list} />
    </div>
  );
}

export default App;
