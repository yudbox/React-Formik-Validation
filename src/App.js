import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import RegisterForm from './components/RegisterForm/RegisterForm'
import CommentsList from './components/CommentsList/CommentsList'
import FormikContainer from './components/FormikContainer/FormikContainer'
import RegistratiomForm2 from './components/RegistratiomForm2/RegistratiomForm2'
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app_container">
      <Sidebar />
      <div className="app_main">
        <Route path="/" component={RegisterForm} exact />
        <Route path="/comments" component={CommentsList} exact />
        <Route path="/formik" component={FormikContainer} exact />
        <Route path="/formik2" component={RegistratiomForm2} exact />
      </div>
    </div>
  )
}
export default App;
