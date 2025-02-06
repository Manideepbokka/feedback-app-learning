import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackProvider'
function FeedbackItemList() {

  const {feedback: feedbackqwe}=useContext(FeedbackContext)

    if (!feedbackqwe || feedbackqwe.length === 0) {
        return <p>No feedback available.</p>;
      }

  return (
    // <div>
    //     {feedbackqwe.map((item) => (
    //     <FeedbackItem key={item.id} item={item} deleteFeedBack={handleFeedBack}/>
    //   ))}
    // </div>

    <AnimatePresence>
      <div className='feedback-list'>
        {feedbackqwe.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{opacity: 0}}
          >
          <FeedbackItem key={item.id} item={item}/>
        </motion.div>
        ))}
        </div>
    </AnimatePresence>

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