import { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { PromiseType, PromiseRepetition } from '../CustomTypes'
import { addNewPromise } from '../utils/storage'


interface promiseForm {
  question: string,
  description: string,
  repetition: PromiseRepetition,
}


const CreatePage = () => {
  const navigate: NavigateFunction = useNavigate()
  const [formData, setFormData]: [promiseForm, any] = useState({
    question: '',
    description: '',
    repetition: PromiseRepetition.Daily,
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const newPromise: PromiseType = {
      ...formData,
      id: -1,
      creationDate: new Date(),
      keptDates: [],
      currentStreak: 0,
      longestStreak: 0,
    }

    addNewPromise(newPromise)
    navigate(-1)
  }
  
  return (
    <>
      <h1>Create page</h1>
      <hr/>
      <button onClick={() => navigate(-1)}>Go back</button>
      <form onSubmit={handleSubmit}>
        <input name='question' type='text' value={formData.question} onChange={handleChange} placeholder='Question (required)' required/>
        <input name='description' type='text' value={formData.description} onChange={handleChange} placeholder='Description (optional)' />
        <select name='repetition' value={formData.repetition} onChange={handleChange}>
          <option value={PromiseRepetition.Daily}>Daily</option>
          <option value={PromiseRepetition.Weekly}>Weekly</option>
          <option value={PromiseRepetition.Monthly}>Monthly</option>
          <option value={PromiseRepetition.Yearly}>Yearly</option>
        </select>
        <button type='submit'>Create a new promise</button>
      </form>
    </>
  )
}

export default CreatePage