import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type UploadButtonProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const fileInput: React.RefObject<HTMLInputElement> = React.createRef();

const UploadButton: FC<UploadButtonProps> = ({ handleFileChange }) => {

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click();
  }

  return (
    <form>
      <input
        accept='.csv'
        type='file'
        hidden
        onChange={handleFileChange}
        ref={fileInput} 
      />
      <Button 
        onClick={handleClick}
        size='lg'
        variant='primary'
      >
        Upload CSV
      </Button>
    </form>
  );
}

export default UploadButton;