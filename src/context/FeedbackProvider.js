import React, {createContext, useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{
    
    const [feedback, setFeedback] = useState([
    ])
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        fetchFeedback();
    }, [])

    const fetchFeedback=async ()=>{
        const response= await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json();
        console.log(data);
        setFeedback(data);
        setLoading(false);
    }

    const [feedbackEdit, setFeedbackEdit]=useState({
        item: {},
        edit: false
    })

    const updateFeedback=async (id, newFeedback)=>{
       const resp= await fetch(`/feedback/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)

        });

        const data=await resp.json();

        setFeedback(feedback.map((item)=> (item.id===id ? 
            {...item, ...data} : item
        )))
    }

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    const deleteFeedBack=async (id)=>{
        if(window.confirm("Are you sure to delete ?")){
            await fetch(`/feedback/${id}`,{method: 'DELETE'})
         setFeedback(feedback.filter(x=> x.id !== id));
        }
       }
       const addNewFeedBack=async (newFeed)=>{
        const resp=await fetch("/feedback",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeed)

        });
        const data=await resp.json();
          const newarr=[...feedback, data ]
          setFeedback(newarr)
       }
    return <FeedbackContext.Provider value={{feedback
    ,deleteFeedBack,
    addNewFeedBack,
    editFeedback,
    feedbackEdit,
    updateFeedback,
    isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;