import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Home page</h1>
      <hr/>
      <button onClick={() => navigate('/create')}>Create a promise</button>
      <button onClick={() => navigate('/edit')}>Edit a promise</button>
      <button onClick={() => navigate('/callendar')}>Open callendar</button>
    </>
  )
}

export default Home