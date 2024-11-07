import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <h1>Create page</h1>
      <hr/>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default CreatePage