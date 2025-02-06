import React, {useContext} from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackProvider'
function FeedbackItem({item}) {

  const {deleteFeedBack, editFeedback}=useContext(FeedbackContext)
    // const deleteItemFromList=(id)=>{
    //     console.log(id);
    // }
  return (
    <Card>
    <div className='num-display'>{item.rating}</div>
    <button className="close" onClick={()=>deleteFeedBack(item.id)}>
        <FaTimes color='purple'/>
    </button>
    <button className='edit' onClick={()=>editFeedback(item)}>
      <FaEdit color='purple'/>
    </button>
    <div className='text-display'>{item.text}</div>
  </Card>
  )
}

export default FeedbackItem
