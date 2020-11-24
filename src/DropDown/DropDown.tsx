import React, { FC } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

type DropDownProps = {
  options: string[];
  selectedOption: string;
  handleSelect: (e: string | null) => void;
  className?: string;
};

const DropDown: FC<DropDownProps> = ({ options, selectedOption, handleSelect, className }) => {
  return (
    <DropdownButton className={className} id='dropdown-basic-button' title={selectedOption} onSelect={handleSelect}>
      {options.map((option, index) => {
        return (
          <Dropdown.Item key={index} eventKey={option} active={option === selectedOption}>{option}</Dropdown.Item>
        )
      })}
    </DropdownButton>
  );
}

export default DropDown;