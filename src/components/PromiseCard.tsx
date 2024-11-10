import { PromiseType } from '../CustomTypes'
import './PromiseCard.css'


const PromiseCard = ({ promise, handleOnEdit }: {
  promise: PromiseType,
  handleOnEdit: any
}) => {
  return (
    <div className='container'>
      <div className='header'>
        <h2>{promise.question}</h2>
        
        <button onClick={handleOnEdit}>EDIT</button>
      </div>

      <div className='section'>
        <div className='section-title'>Description</div>
        <hr className='section-line' />
      </div>

      <div className='description'>
        <h4>{promise.description}</h4>
      </div>

      <div className='section'>
        <hr className='section-line'/>
      </div>
      
      <div className='parameters'>
        <hr />
        <h5>Repeat: {promise.repetition}</h5>
        <hr/>
        <h5>Created: {promise.creationDate.toDateString()}</h5>
        <hr />
        <h5>Streak: {promise.currentStreak}</h5>
        <hr />
        <h5>Longest: {promise.longestStreak}</h5>
        <hr />
      </div>
    </div>
  )
}

export default PromiseCard