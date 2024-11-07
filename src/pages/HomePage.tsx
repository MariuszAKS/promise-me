import { useNavigate } from 'react-router-dom'
import { promise } from '../App'

const Home = ({ promises }: {
  promises: promise[]
}) => {
  const navigate = useNavigate()

  console.log(promises)

  return (
    <>
      <h1>Home page</h1>
      <hr/>
      {promises.map((promise, index) => 
        <div key={index}>
          <h3>{promise.question}</h3>
          {promise.description}
          <h6>{promise.repetition}</h6>
          <h6>{promise.creationDate.toDateString()}</h6>
          <h6>{promise.longestStreak}, {promise.currentStreak}</h6>
          <hr/>
        </div>
      )}
      <button onClick={() => navigate('/create')}>Create a promise</button>
      <button onClick={() => navigate('/edit')}>Edit a promise</button>
      <button onClick={() => navigate('/callendar')}>Open callendar</button>
    </>
  )
}

export default Home