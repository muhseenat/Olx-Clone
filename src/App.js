import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'
import {AuthContext,FirebaseContext} from './store/Context'
import Post from './store/PostContext'

function App() {
 const {setUser}= useContext(AuthContext)
 const {firebase} = useContext(FirebaseContext)
 useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
     setUser(user)
   })
 })

  return (
    <div>
<Post>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
        <Route path='/signup' element={ <Signup/>}></Route>
        <Route path='/login' element={ <Login/>}> </Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/view' element={<ViewPost/>}></Route>
     
      </Routes>
    </Router>
</Post>
     
    </div>
  );
}

export default App;
