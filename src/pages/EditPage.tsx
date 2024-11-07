import { useNavigate } from 'react-router-dom'

const EditPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Edit page</h1>
      <hr/>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default EditPage