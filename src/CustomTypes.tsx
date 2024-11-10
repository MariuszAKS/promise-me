
export enum PromiseRepetition {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export interface PromiseType {
  id: number,
  question: string,
  description: string,
  repetition: PromiseRepetition,
  creationDate: Date,
  keptDates: Date[],
  currentStreak: number,
  longestStreak: number,
}

export function isPromiseType(obj: any): obj is PromiseType {
  return (
    obj &&
    typeof obj.id === 'number' &&
    typeof obj.question === 'string' &&
    typeof obj.description === 'string' &&
    Object.values(PromiseRepetition).includes(obj.repetition) &&
    obj.creationDate instanceof Date && !isNaN(obj.creationDate.getTime()) &&
    Array.isArray(obj.keptDates) && obj.keptDates.every((date: any) => date instanceof Date && !isNaN(date.getTime())) &&
    typeof obj.currentStreak === 'number' &&
    typeof obj.longestStreak === 'number'
  )
}