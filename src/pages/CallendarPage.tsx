import { useNavigate } from 'react-router-dom'

const CallendarPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Callendar page</h1>
      <hr/>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default CallendarPage