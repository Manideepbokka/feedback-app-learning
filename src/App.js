import Header from "./components/Header"
import AboutIconLink from './components/AboutIconFile'
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import FeedBackList from './components/FeedbackItemList'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';
import Post from './components/Post'
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackProvider";


function App() {
  
  return (
    <FeedbackProvider>
    <Router>
      <Header text="FeedBack UI"/>
    <div className="container" >
    <Routes>
    <Route 
            path="/" 
            element={
              <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedBackList/>
              </>
            } 
          />
      <Route path="/about" Component={AboutPage}/>
      <Route path="/post/:id/:name" element={<Post/>}/>
      
    </Routes>
    <AboutIconLink/>
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
