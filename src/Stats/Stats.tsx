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

  const startMonth = data.startDate.toLocaleString('default', { month: 'long' });
  const startDate = startMonth + ' ' + data.startDate.getDate() + ', ' + data.startDate.getFullYear();
  const endMonth = data.endDate.toLocaleString('default', { month: 'long' });
  const endDate = endMonth + ' ' + data.endDate.getDate() + ', ' + data.endDate.getFullYear();

  return (
    <div className={styles.root}>
      <h2>Your Data</h2>
      <p role='doc-subtitle' className={styles.subheader}>From {startDate} - {endDate}.</p>

      <div className={styles.cards}>
        <div className={styles.statCard}>
          <span className={styles.emphasized}>{data.totalClasses}</span><p>classes</p>
        </div>
        <div className={styles.statCard}>
          <p><span className={styles.emphasized}>{timeSpent.days}</span> days</p>
          <p><span className={styles.emphasized}>{timeSpent.hours}</span> hours</p>
          <p><span className={styles.emphasized}>{timeSpent.minutes}</span> minutes</p>
        </div>
        <div className={styles.statCard}>
          <span className={styles.emphasized}>{Math.round(data.totalMiles)}</span><p>miles</p>
        </div>
        <div className={styles.statCard}>
          <span className={styles.emphasized}>{Math.round(data.totalCalories)}</span><p>calories</p>
        </div>
      </div>

      <p>Your favorite class type is <span className={styles.emphasized}>{favoriteClass[0]}</span>, taken <span className={styles.emphasized}>{favoriteClass[1]}</span> times.</p>
      <p>Your favorite instructor is <span className={styles.emphasized}>{favoriteInstructor[0]}</span>, taken <span className={styles.emphasized}>{favoriteInstructor[1]}</span> times.</p>
    </div>
  );
}

export default Stats;