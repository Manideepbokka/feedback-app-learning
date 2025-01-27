import Header from "./components/Header"
import './App.css';
import { useState } from "react";
import FeedbackData from './data/FeedbackData'
import FeedBackList from './components/FeedbackItemList'
import FeedbackStats from "./components/FeedbackStats";
function App() {
  const [feedback, setFeedback]=useState(FeedbackData)
  const deleteFeedBack=(id)=>{
   if(window.confirm("Are you sure to delete ?")){
    setFeedback(feedback.filter(x=> x.id !== id));
   }
  }
  return (
    <div >
      <Header text="FeedBack UI"/>
      <FeedbackStats feedback={feedback} />
      <FeedBackList feedbackqwe={feedback} handleFeedBack={deleteFeedBack}/>
    </div>
  );
}

export default App;
