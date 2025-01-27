import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackItemList({feedbackqwe, handleFeedBack}) {

    if (!feedbackqwe || feedbackqwe.length === 0) {
        return <p>No feedback available.</p>;
      }

  return (
    <div>
        {feedbackqwe.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteFeedBack={handleFeedBack}/>
      ))}
    </div>
  )
}

FeedbackItemList.prototype={
    feedbackqwe: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default FeedbackItemList