import React, {useState} from 'react'

function RatingSelect({select}) {
    const [rating, setRating]=useState(0)
    const handleChange = (e)=>{
        const newval=+e.target.value;
        select(newval);
        setRating(newval)
    }
  return (
    <div>
        <ul className='rating'>
            {Array.from({length: 10}, (_, i) =>(
                <li key={`rating-${i+1}`}>
                    <input type="radio" 
                     id={`num${i + 1}`}
                     name='rating'
                     value={i + 1}
                     onChange={handleChange}
                     checked={rating === i + 1}/>
                     <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RatingSelect