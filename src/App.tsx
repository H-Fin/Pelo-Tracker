import React, { useState } from 'react';
import getData from './utils/getClassCounts';
import Header from './Header/Header';
import DataGraph from './DataGraph/DataGraph';
import Stats from './Stats/Stats';
import './app.scss';

function App() {
  const [results, setResults] = useState<Papa.ParseResult<unknown> | undefined>(undefined);
  const data = (results) ? getData(results.data) : undefined;

  return (
    <div className={'root'}>
      <Header setResults={setResults} />
      {data && <DataGraph data={data} />}
      {data && <Stats data={data} />}
    </div>
  );
}

export default App;
