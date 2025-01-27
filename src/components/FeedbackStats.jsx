import React from 'react'
import PropTypes from 'prop-types';
function FeedbackStats({feedback}) {
    const averagerating=()=>{
        if(feedback.length === 0) return 0;
        const totalRating=feedback.map(x=> x.rating).reduce((acc, curr) => acc + curr, 0);
        return (totalRating / feedback.length).toFixed(1).replace(/[.,]0$/,''); 
    }
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average ratings: {averagerating()} </h4>
    </div>
  )
}

FeedbackStats.prototype = {
  feedback: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
      })
  ).isRequired,
}
export default FeedbackStats