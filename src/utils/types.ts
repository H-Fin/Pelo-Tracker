export type Data = {
  totalClasses: number,
  totalTime: number,
  totalMiles: number,
  totalCalories: number,
  startDate: Date,
  endDate: Date,
  classTypes: { [key: string]: number },
  instructors: { [key: string]: number}
};
  
export type Result = {
  fitnessDiscipline: string,
  instructorName: string
}
