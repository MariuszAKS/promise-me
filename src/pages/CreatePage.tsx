import { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

enum promiseRepetition {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

type promiseForm = {
  question: string,
  description: string,
  repetition: promiseRepetition,
}

const CreatePage = () => {
  const navigate: NavigateFunction = useNavigate()
  const [formData, setFormData]: [promiseForm, any] = useState({
    question: '',
    description: '',
    repetition: promiseRepetition.Daily,
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> =
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      console.log(formData)
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
          <option value={promiseRepetition.Daily}>Daily</option>
          <option value={promiseRepetition.Weekly}>Weekly</option>
          <option value={promiseRepetition.Monthly}>Monthly</option>
          <option value={promiseRepetition.Yearly}>Yearly</option>
        </select>
        <button type='submit'>Create a new promise</button>
      </form>
    </>
  )
}

export default CreatePage