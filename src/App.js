import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import RegisterForm from './components/RegisterForm/RegisterForm'
import CommentsList from './components/CommentsList/CommentsList'
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app_container">
      <Sidebar />
      <div className="app_main">
      <Route path="/" component={RegisterForm} exact />
      <Route path="/comments" component={CommentsList} exact />

      </div>

    </div>
  )
}
export default App;
