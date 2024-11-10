import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import CallendarPage from './pages/CallendarPage'
import './App.css'


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="callendar" element={<CallendarPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
