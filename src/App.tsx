import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Main} from "./Pages/main";
import {Login} from "./Pages/login";
import {Navbar} from "./components/navbar";
import { CreatePost } from './Pages/create-post/create_post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Main />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/createpost' element = {<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
