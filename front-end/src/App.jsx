import { useState } from 'react'

import './App.css'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './components/homePageComponents/HomePage.jsx'
import ToDoPage from './components/toDoPageComponents/ToDoPage.jsx';
import WhatDoPage from './components/whatDoPageComponents/WhatDoPage.jsx';
import SchedulePage from './components/schedulePageComponents/SchedulePage.jsx';


function App() {

  return (
    // <HomePage />
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/todo"
          element={<ToDoPage />}
        />
        <Route
          path="/schedule"
          element={<SchedulePage />}
        />
        <Route
          path="/whatdo"
          element={<WhatDoPage />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
