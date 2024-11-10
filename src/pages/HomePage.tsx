import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PromiseCard from '../components/PromiseCard'
import { PromiseType } from '../CustomTypes'
import { getAllPromises, tryInitiateNextPromiseId } from '../utils/storage'


const Home = () => {
  const navigate = useNavigate()
  const [promises, setPromises] = useState<PromiseType[]>([])

  useEffect(() => {
    const fetchPromises = async () => {
      const fetchedPromises = await getAllPromises()
      console.log(fetchedPromises)
      setPromises(fetchedPromises)
    }
    fetchPromises()
  }, [])

  return (
    <>
      <h1>Home page</h1>

      <button onClick={() => navigate('create')}>Create a promise</button>
      <button onClick={() => navigate('callendar')}>Open callendar</button>

      {promises.map((promise) => 
        <PromiseCard key={promise.id} promise={promise} handleOnEdit={() => navigate(`edit?id=${promise.id}`)} />
      )}
    </>
  )
}

export default Home