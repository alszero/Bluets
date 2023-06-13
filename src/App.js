import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/login.jsx';
import SignupPage from './pages/Signup';
import DictionaryPage from './pages/dictionary/AddWordForm';
import CommunityPage from './pages/community/Community';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/main' element={<MainPage/>}/>
          <Route exact path='/' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignupPage/>}/>
          <Route exact path='/dictionary' element={<DictionaryPage/>}/>
          <Route exact path='/community' element={<CommunityPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;