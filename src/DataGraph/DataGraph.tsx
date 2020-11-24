import React, { FC, useState } from 'react';
import { Data } from '../utils/types';
import Dropdown from '../DropDown/DropDown';
import PieChart from './ChartTypes/PieChart';
import BarChart from './ChartTypes/BarChart';
import styles from './dataGraph.module.scss';

type DataGraphProps = {
  data: Data;
};

// Options for dropdown
const options = ['Class Types', 'Instructors'];

const DataGraph: FC<DataGraphProps> = ({ data }) => {

  // Handles dropdown
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleSelect=(e: string | null)=>{
    if (e) setSelectedOption(e);
  }

  return (
    <div className={styles.root}>
      <Dropdown className={styles.dropdown} options={options} selectedOption={selectedOption} handleSelect={handleSelect} />
      {selectedOption === options[0] && <PieChart data={data.classTypes} />}
      {selectedOption === options[1] && <BarChart data={data.instructors} />}
    </div>
  );
}

export default DataGraph;