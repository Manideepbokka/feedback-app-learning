import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm() {
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
  return (
    <Card>
        <form>

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