import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackProvider'

function FeedbackForm() {
    const {addNewFeedBack, feedbackEdit, updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])
    const [text, setText]=useState('')
    const [btnDisabled, setBtnDisabled]=useState('')
    const [message, setMessage]=useState('')
    const [rating, setRating]=useState('')

    const handleTextChange=(e)=> {
        const newText = e.target.value; // Get the new value
        setText(newText);
        if(newText===''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(newText!=='' && newText.trim().length<10){
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 characters');
        } else{
            setBtnDisabled(false);
            setMessage(null);
        }
       
    }
    const submitForm= (e)=>{
        e.preventDefault();
        const newFeedback={
            text: text,
            rating: rating
        }
        console.log(newFeedback);
        if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id,
                newFeedback
            )
        } else{
            addNewFeedBack(newFeedback);
        }
        
    }
  return (
    <Card>
        <form onSubmit={submitForm}>

            <h2>How would you rate your service</h2>
            <RatingSelect select={(rating) => {
                console.log(rating);
                setRating(rating)
            }} />
            <div className="input-group">
                <input type="text" name="review" 
                id="review" placeholder='Write a review' 
                onChange={handleTextChange}
                value={text}/>

                 <Button
                 type="submit"
                 version="secondary"
                 isDisabled={btnDisabled}
                 >Send</Button>
                 {message && <div className='message'>{message}</div>}
            </div>
            
        </form>
    </Card>
  )
}

export default FeedbackForm