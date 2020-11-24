import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

type DemoButtonProps = {
  handleLoadDemoContent: () => void;
}

const DemoButton: FC<DemoButtonProps> = ({ handleLoadDemoContent }) => {
  return (
    <Button 
      onClick={handleLoadDemoContent}
      size='lg'
      variant='secondary'
    >
      Demo
    </Button>
  );
}

export default DemoButton;