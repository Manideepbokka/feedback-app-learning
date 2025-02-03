import Header from "./components/Header"
import AboutIconLink from './components/AboutIconFile'
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { useState } from "react";
import FeedbackData from './data/FeedbackData'
import FeedBackList from './components/FeedbackItemList'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';
import AboutPage from "./components/pages/AboutPage";


function App() {
  const [feedback, setFeedback]=useState(FeedbackData)
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
  return (
    <Router>
      <Header text="FeedBack UI"/>
    <div className="container" >
    <Routes>
    <Route 
            path="/" 
            element={
              <>
                <FeedbackForm addFeedBack={(newfeed) => addNewFeedBack(newfeed)} />
                <FeedbackStats feedback={feedback} />
                <FeedBackList feedbackqwe={feedback} handleFeedBack={deleteFeedBack} />
              </>
            } 
          />
      <Route path="/about" Component={AboutPage}/>
      
    </Routes>
    <AboutIconLink/>
    </div>
    </Router>
  );
}

export default App;
