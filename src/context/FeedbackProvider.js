import React, {createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{
    
    const [feedback, setFeedback] = useState([
        {
            id: 1234,
            text: "This  is related to feedback added after context",
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit]=useState({
        item: {},
        edit: false
    })

    const updateFeedback=(id, newFeedback)=>{
        setFeedback(feedback.map((item)=> (item.id===id ? 
            {...item, ...newFeedback} : item
        )))
    }

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    const deleteFeedBack=(id)=>{
        if(window.confirm("Are you sure to delete ?")){
         setFeedback(feedback.filter(x=> x.id !== id));
        }
       }
       const addNewFeedBack=(newFeed)=>{
          newFeed.id=uuidv4();
          const newarr=[...feedback, newFeed ]
          setFeedback(newarr)
       }
    return <FeedbackContext.Provider value={{feedback
    ,deleteFeedBack,
    addNewFeedBack,
    editFeedback,
    feedbackEdit,
    updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;