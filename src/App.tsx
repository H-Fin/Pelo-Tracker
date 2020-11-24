import React, { useState } from 'react';
import { readString } from 'react-papaparse';
import { camelCase } from 'lodash';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import UploadInstructions from './UploadInstructions/UploadInstructions';
import UploadButton from './Buttons/UploadButton';
import DemoButton from './Buttons/DemoButton';
import DataGraph from './DataGraph/DataGraph';
import demoData from './fixtures/DemoData';
import './App.scss';

const config = {
  header: true,
  dynamicTyping: true,
  transformHeader: function(header: string) { 
    return camelCase(header);
  }
}

function App() {
  let fileReader = new FileReader();
  const [results, setResults] = useState<Papa.ParseResult<unknown> | null>(null);

  const handleFileRead = () => {
    const content = fileReader.result as string;
    setResults(readString(content, config));
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length > 0) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(event.target.files[0]);
    }
  }

  const handleLoadDemoContent = () => {
    setResults(readString(demoData, config));
  }
  
  return (
    <div className="App">
      <Jumbotron>
        <Container>
          <h1>Pelo Tracker</h1>
          <UploadInstructions />
          <UploadButton handleFileChange={handleFileChange} />
          <DemoButton handleLoadDemoContent={handleLoadDemoContent} />
        </Container>
      </Jumbotron>
      {results && <DataGraph results={results.data} />}
    </div>
  );
}

export default App;
