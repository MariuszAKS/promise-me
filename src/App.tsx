import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import CallendarPage from './pages/CallendarPage'
import './App.css'

export enum PromiseRepetition {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export type promise = {
  question: string,
  description: string,
  repetition: PromiseRepetition,
  creationDate: Date,
  keptDates: Date[],
  currentStreak: number,
  longestStreak: number,
}


function App() {
  let promises: promise[] = [
    {
      question: 'Did you drink water?',
      description: 'Some description for testing purposes, I\'ll try to make it longer to see how will text be displayed.',
      repetition: PromiseRepetition.Daily,
      creationDate: new Date(2024, 11, 7),
      keptDates: [
        new Date(2024, 10, 7),
      ],
      currentStreak: 1,
      longestStreak: 1,
    },
    {
      question: 'Did you drink water?',
      description: 'Some description for testing purposes, I\'ll try to make it longer to see how will text be displayed.',
      repetition: PromiseRepetition.Daily,
      creationDate: new Date(2024, 11, 7),
      keptDates: [
        new Date(2024, 10, 7),
      ],
      currentStreak: 1,
      longestStreak: 1,
    },
    {
      question: 'Did you drink water?',
      description: 'Some description for testing purposes, I\'ll try to make it longer to see how will text be displayed.',
      repetition: PromiseRepetition.Daily,
      creationDate: new Date(2024, 11, 7),
      keptDates: [
        new Date(2024, 10, 7),
      ],
      currentStreak: 1,
      longestStreak: 1,
    }
  ]

  console.log(promises)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage promises={promises}/>} />
        <Route path="/create" element={<CreatePage promises={promises} />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/callendar" element={<CallendarPage />} />
      </Routes>
    </>
  )
}

export default App
