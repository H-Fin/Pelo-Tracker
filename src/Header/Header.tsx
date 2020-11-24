import React, { FC } from 'react';
import { readString } from 'react-papaparse';
import { camelCase } from 'lodash';
import Jumbotron from 'react-bootstrap/Jumbotron';
import UploadInstructions from '../UploadInstructions/UploadInstructions';
import UploadButton from '../Buttons/UploadButton';
import DemoButton from '../Buttons/DemoButton';
import demoData from '../fixtures/DemoData';
import styles from './header.module.scss';

type HeaderProps = {
  setResults: (value: Papa.ParseResult<unknown> | undefined) => void;
}

const config = {
  header: true,
  dynamicTyping: true,
  transformHeader: function(header: string) { 
    return camelCase(header);
  }
};

const Header: FC<HeaderProps> = ({ setResults }) => {
  let fileReader = new FileReader();

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
    <Jumbotron className={styles.headerRoot}>
        <h1>Pelo Tracker</h1>
        <UploadInstructions />
        <div className={styles.buttons}>
          <UploadButton className={styles.uploadButton} handleFileChange={handleFileChange} />
          <DemoButton handleLoadDemoContent={handleLoadDemoContent} />
        </div>
    </Jumbotron>
  );
}

export default Header;