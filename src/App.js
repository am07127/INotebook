import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Stories from './components/stories.js'
import Form from './components/form.js'
import  Team from './components/team.js'
import Donation from './components/donation.js'
import Login from './components/login.js'
import Mediagallery from './components/mediagallery.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import images from './components/images';
import Memberinfo from './components/memberinfo';
import PersonState from './context/PersonState';


function App() {
  
  return (
    <div className="App">
      <PersonState>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/stories" element={<Stories/>}></Route>
            <Route exact path="/" element={<Form/>}></Route>
            <Route exact path="/team" element={<Team/>}></Route>
            <Route exact path="/donation" element={<Donation/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/media" element={<Mediagallery images={images}/>}></Route>
            <Route exact path="/team/info" element={<Memberinfo/>}></Route>
          </Routes>
          <Footer />
      </Router>
      </PersonState>
    </div>
  );
}

export default App;
