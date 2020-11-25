import { Data, Result } from './types';

const getData = (results: any) => {
  let data: Data = {
    'totalClasses': 0,
    'totalTime': 0,
    'totalMiles': 0,
    'totalCalories': 0,
    'startDate': new Date (results[0].workoutTimestamp),
    'endDate': new Date (results[results.length - 1].workoutTimestamp),
    'classTypes': {},
    'instructors': {}
  };

  for(let i = 0; i < results.length; i++) {
    if(results[i].workoutTimestamp) {
      // Calculate total number of classes taken
      data.totalClasses += 1;

      // Calculate total time of classes taken in minutes
      data.totalTime += results[i].lengthMinutes;

      // Calculate total distance traveled in miles
      data.totalMiles += results[i].distanceMi;

      // Calculate total calories burned
      data.totalCalories += results[i].caloriesBurned;

      // Calculate types of classes taken and count
      getClassCount(results[i], data);

      // Calculate instructors taken and count
      getInstructorCount(results[i], data);
    }
  }
  console.log(data, results);
  return data;
}

const getClassCount = (result: Result, data: Data) => {
  const classType = result.fitnessDiscipline;
  if (classType in data.classTypes) {
    data.classTypes[classType] += 1;
  } else {
    data.classTypes[classType] = 1;
  }
}

const getInstructorCount = (result: Result, data: Data) => {
  const instructorName = result.instructorName;
  if (instructorName in data.instructors) {
    data.instructors[instructorName] += 1;
  } else {
    data.instructors[instructorName] = 1;
  }
}

export const getFavorite = (data: Data, type: 'classTypes' | 'instructors') => {
  return Object.entries(data[type]).reduce((a, b) => a[1] > b[1] ? a : b)
}

export const convertMinutes = (minutes: number) => {
  const days = Math.floor(minutes / 1440);
  minutes %= 1440;
  const hours = Math.floor(minutes / 60);
  minutes %= 60;
  return {days, hours, minutes};
}

export default getData;