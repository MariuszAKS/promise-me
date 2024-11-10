import { useEffect, useState } from 'react'
import { NavigateFunction, useNavigate, useLocation } from 'react-router-dom'

import { PromiseType, PromiseRepetition } from '../CustomTypes'
import { getPromise, updatePromise } from '../utils/storage'


interface promiseForm {
  question: string,
  description: string,
  repetition: PromiseRepetition,
}


const EditPage = () => {
  const navigate: NavigateFunction = useNavigate()
  const [formData, setFormData] = useState<promiseForm>({
    question: '',
    description: '',
    repetition: PromiseRepetition.Daily,
  })
  const promiseId: string | null = new URLSearchParams(useLocation().search).get('id')
  const [promiseToUpdate, setPromiseToUpdate] = useState<PromiseType>()

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

    if (promiseToUpdate) {
      promiseToUpdate.question = formData.question
      promiseToUpdate.description = formData.description
      promiseToUpdate.repetition = formData.repetition

      if (promiseId) {
        updatePromise(promiseId, promiseToUpdate)
      }
    }
    navigate(-1)
  }
  

  useEffect(() => {
    const fetchPromise = async () => {
      if (promiseId) {
        const fetchedPromise = await getPromise(promiseId)

        if (fetchedPromise) {
          setPromiseToUpdate(fetchedPromise)
          setFormData({
            question: fetchedPromise.question,
            description: fetchedPromise.description,
            repetition: fetchedPromise.repetition,
          })
        }
        else navigate(-1)
      }
      else navigate(-1)
    }
    fetchPromise()
  }, [])


  return (
    <>
      <h1>Edit a promise</h1>
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
        <button type='submit'>Update a promise</button>
      </form>
    </>
  )
}

export default EditPage