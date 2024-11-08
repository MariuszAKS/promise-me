import { useNavigate } from 'react-router-dom'
import PromiseCard from '../components/PromiseCard'
import { promise } from '../App'

const Home = ({ promises }: {
  promises: promise[]
}) => {
  const navigate = useNavigate()

  console.log(promises)

  return (
    <>
      <h1>Home page</h1>

      <button onClick={() => navigate('/create')}>Create a promise</button>
      <button onClick={() => navigate('/callendar')}>Open callendar</button>

      {promises.map((promise, index) => 
        <PromiseCard key={index} promise={promise} handleOnEdit={() => navigate('/edit')} />
      )}
    </>
  )
}

export default Home