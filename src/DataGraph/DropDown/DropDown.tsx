import React, { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

type DropDownProps = {
  options: string[];
  selectedOption: string;
  handleSelect: (e: string | null) => void;
};

const DropDown: FC<DropDownProps> = ({ options, selectedOption, handleSelect }) => {
  return (
    <DropdownButton id='dropdown-basic-button' title={selectedOption} onSelect={handleSelect}>
      {options.map(option => {
        return (
          <Dropdown.Item eventKey={option} active={option === selectedOption}>{option}</Dropdown.Item>
        )
      })}
    </DropdownButton>
  );
}

export default DropDown;