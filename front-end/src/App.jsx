import { useState } from 'react'

import './App.css'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import ToDoPage from './components/ToDoPage.jsx';
import WhatDoPage from './components/WhatDoPage.jsx';
import SchedulePage from './components/SchedulePage.jsx';


function App() {

  return (
    // <HomePage />
    <Router>
      <Routes>
        {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
        <Route
          exact
          path="/"
          element={<HomePage />}
        />

        {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
        <Route
          path="/todo"
          element={<ToDoPage />}
        />

        {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
        <Route
          path="/schedule"
          element={<SchedulePage />}
        />
        <Route
          path="/whatdo"
          element={<WhatDoPage />}
        />

        {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        {/* <Redirect to="/" /> */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
