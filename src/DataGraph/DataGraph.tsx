import React, { FC, useState } from 'react';
import getData, { getFavorite, convertMinutes } from './utils/getClassCounts';
import Dropdown from './DropDown/DropDown';
import PieChart from './ChartTypes/PieChart';
import BarChart from './ChartTypes/BarChart';

type DataGraphProps = {
  results: unknown[];
};

// Options for dropdown
const options = ['Class Types', 'Instructors'];

const DataGraph: FC<DataGraphProps> = ({ results }) => {

  // Handles dropdown
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleSelect=(e: string | null)=>{
    if (e) setSelectedOption(e);
  }

  const data = getData(results);
  const favoriteClass = getFavorite(data, 'classTypes');
  const favoriteInstructor = getFavorite(data, 'instructors');
  const timeSpent = convertMinutes(data.totalTime);

  return (
    <div className="root">
      <Dropdown options={options} selectedOption={selectedOption} handleSelect={handleSelect} />
      {selectedOption === options[0] && <PieChart data={data.classTypes} />}
      {selectedOption === options[1] && <BarChart data={data.instructors} />}

      <h3>You have taken {data.totalClasses} classes.</h3>
      <h3>You have spent {timeSpent.days} days, {timeSpent.hours} hours, and {timeSpent.minutes} minutes working out.</h3>
      <h3>Your favorite class type is {favoriteClass[0]}, taken {favoriteClass[1]} times.</h3>
      <h3>Your favorite instructor is {favoriteInstructor[0]}, taken {favoriteInstructor[1]} times.</h3>
    </div>
  );
}

export default DataGraph;