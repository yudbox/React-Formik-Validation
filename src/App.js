import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import RegisterForm from './components/RegisterForm/RegisterForm'
import CommentsList from './components/CommentsList/CommentsList'

const App = (props) => {
  return (
    <div className="app_container">
      <Header />
      <div className="app_main">
        <RegisterForm />
        <CommentsList />
      </div>

    </div>
  )
}
export default App;
