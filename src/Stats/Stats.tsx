import React, { FC } from 'react';
import { Data } from '../utils/types';
import { getFavorite, convertMinutes } from '../utils/getClassCounts';
import styles from './stats.module.scss';

type StatsProps = {
  data: Data;
}

const Stats: FC<StatsProps> = ({ data }) => {
  const favoriteClass = getFavorite(data, 'classTypes');
  const favoriteInstructor = getFavorite(data, 'instructors');
  const timeSpent = convertMinutes(data.totalTime);

  return (
    <div className={styles.root}>
      <h2>Your Data</h2>
      <p role='doc-subtitle'>From (start date here) - (end date here).</p>
      <p>You have taken {data.totalClasses} classes.</p>
      <p>You have spent {timeSpent.days} days, {timeSpent.hours} hours, and {timeSpent.minutes} minutes working out.</p>
      <p>Your favorite class type is {favoriteClass[0]}, taken {favoriteClass[1]} times.</p>
      <p>Your favorite instructor is {favoriteInstructor[0]}, taken {favoriteInstructor[1]} times.</p>
    </div>
  );
}

export default Stats;